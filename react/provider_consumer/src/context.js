import React, { Component } from 'react'
import {createContext} from 'react'

const Context = createContext({});
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;