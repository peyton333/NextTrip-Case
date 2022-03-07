import * as types from '../constants/actionTypes';

export const getTransitRoutes = () => ({
    type: types.GET_TRANSIT_ROUTES,
});

export const setTransitRoute = (transitRoute) => ({
    type: types.SET_TRANSIT_ROUTE,
    payload: transitRoute
})

export const getDirections = (transitRoute) => ({
    type: types.GET_DIRECTIONS,
    payload: transitRoute
})

export const setDirection = (direction) => ({
    type: types.SET_DIRECTION,
    payload: direction
})

export const getStops = (transitRoute, direction) => ({
    type: types.GET_STOPS,
    payload: transitRoute,
    direction
})
