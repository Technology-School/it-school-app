import {
  cleanEnv,
  str,
} from 'envalid'

export const env = cleanEnv(process.env, {
  GRAPHQL_PATH: str({ default: '/graphql' }),
})
