export const getCurrentEndpoint = (state) => {
  if (state.endpoints[state.activeEndpointIndex]) {
    return state.endpoints[state.activeEndpointIndex]
  } else {
    return false
  }

}

export const getEndpoints = (state) => {
  return state.endpoints
}

export const getLastInfo = (state) => {
  return state.lastGetInfo
}

export const getConnectionTimeout = (state) => {
  return state.connectionTimeoutMilSec
}

export const getConnectionInterval = (state) => {
  return state.checkIntervalMilSec
}

export const hasScatter = (state) => {
  return state.scatterAvailable
}

export const getScatter = (state) => {
  return state.scatter
}

export const getAbiActions = (state) => {
  if (state.tokenContractAbi) {
    return state.tokenContractAbi.actions
  } else {
    return null
  }
}

export const getNotification = (state) => {
    return state.notification
}
