/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...catchAll]': RouteRecordInfo<'/[...catchAll]', '/:catchAll(.*)', { catchAll: ParamValue<true> }, { catchAll: ParamValue<false> }>,
    '/books/': RouteRecordInfo<'/books/', '/books', Record<never, never>, Record<never, never>>,
    '/books/[slug]': RouteRecordInfo<'/books/[slug]', '/books/:slug', { slug: ParamValue<true> }, { slug: ParamValue<false> }>,
    '/comments/': RouteRecordInfo<'/comments/', '/comments', Record<never, never>, Record<never, never>>,
    '/comments/[id]': RouteRecordInfo<'/comments/[id]', '/comments/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/login': RouteRecordInfo<'/login', '/login', Record<never, never>, Record<never, never>>,
    '/register': RouteRecordInfo<'/register', '/register', Record<never, never>, Record<never, never>>,
    '/users/[username]': RouteRecordInfo<'/users/[username]', '/users/:username', { username: ParamValue<true> }, { username: ParamValue<false> }>,
  }
}
