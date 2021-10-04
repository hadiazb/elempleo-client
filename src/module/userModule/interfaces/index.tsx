import React from 'react'

export default interface RouteObject {
  path: string,
  key: string,
  exact: boolean,
  component: React.FC,
  auth: boolean,
}
