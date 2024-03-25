import { defineStore } from 'pinia'

export const ADD_SELECTED_ORGANIZATION = 'ADD_SELECTED_ORGANIZATION'
export const ADD_SELECTED_JOB_TYPES = 'ADD_SELECTED_JOB_TYPES'
export const ADD_SELECTED_DEGREES = 'ADD_SELECTED_DEGREES'
export const CLEAR_USER_JOB_FILTER_SELECTION = 'CLEAR_USER_JOB_FILTER_SELECTION'

export interface UserState {
  isLoggedIn: boolean
  selectedOrganizations: string[]
  selectedJobTypes: string[]
  selectedDegrees: string[]
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: []
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true
    },
    [ADD_SELECTED_ORGANIZATION](organizations: string[]) {
      this.selectedOrganizations = organizations
    },
    [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
      this.selectedJobTypes = jobTypes
    },
    [ADD_SELECTED_DEGREES](degrees: string[]) {
      this.selectedDegrees = degrees
    },
    [CLEAR_USER_JOB_FILTER_SELECTION]() {
      this.selectedDegrees = []
      this.selectedJobTypes = []
      this.selectedOrganizations = []
    }
  }
})
