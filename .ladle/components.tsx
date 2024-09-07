import type { GlobalProvider } from '@ladle/react'
import React from 'react'
import '../src/components/styles/style.css'

export const Provider: GlobalProvider = ({ children }) => <>{children}</>
