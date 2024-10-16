import axios from "axios"
import React from "react"

export const userAPI = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return instance.get(
      `/users?page=${pageNumber}&count=${pageSize}`,
    )
      .then(response => { return response.data })
  },
  userUnfollow(id) {
    return instance.delete(`/follow/${id}`).then(response => { return response.data })
  },
  userFollow(id) {
    return instance.post(`/follow/${id}`).then((response) => { return response.data })
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance
      .get(`/profile/${userId}`)
  },
  getStatus(userId) {
    return instance
    .get(`/profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance
    .put(`profile/status`, {status: status})
  }
}


export const authAPI = {
  me() {
    return instance
      .get(`/auth/me`)
  },
}


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "58a5bfe8-fb58-45cc-be68-1ed1ce60bfd2",
  },
});

