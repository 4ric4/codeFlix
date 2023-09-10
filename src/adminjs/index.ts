import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { adminJsResources } from './resources'
import { sequelize } from '../database'
import { locale } from './locale'
import { dashboardOptions } from './dashboard'
import { bradingOptions } from './brading'
import { authenticationOptions } from './authentication'


AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
  databases:[sequelize],
  rootPath: '/admin',
  resources:adminJsResources,
  branding: bradingOptions,
  locale: locale,
  dashboard: dashboardOptions
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs,authenticationOptions, null,{
  resave:false,
  saveUninitialized:false
})