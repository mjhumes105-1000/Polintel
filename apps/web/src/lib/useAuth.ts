'use client'

export interface AuthState {
  isPremium: boolean
}

export function useAuth(): AuthState {
  return { isPremium: false }
}
