import Env from '@ioc:Adonis/Core/Env'
import { driveConfig } from '@adonisjs/core/build/config'
import Application from '@ioc:Adonis/Core/Application'

export default driveConfig({
  disk: Env.get('DRIVE_DISK'),
  disks: {
    local: {
      driver: 'local',
      visibility: 'public',
      root: Application.tmpPath('uploads'),
      serveFiles: true,
      basePath: '/uploads',
    },
    /*
    |--------------------------------------------------------------------------
    | GCS Driver
    |--------------------------------------------------------------------------
    |
    | Uses the Google cloud storage to manage files. Make sure to install the GCS
    | drive separately when using it.
    |
    |**************************************************************************
    | npm i @adonisjs/drive-gcs
    |**************************************************************************
    |
    */
    // gcs: {
    //   driver: 'gcs',
    //   visibility: 'public',
    //   keyFilename: Env.get('GCS_KEY_FILENAME'),
    //   bucket: Env.get('GCS_BUCKET'),

    /*
      |--------------------------------------------------------------------------
      | Uniform ACL - Google cloud storage only
      |--------------------------------------------------------------------------
      |
      | When using the Uniform ACL on the bucket, the "visibility" option is
      | ignored. Since, the files ACL is managed by the google bucket policies
      | directly.
      |
      |**************************************************************************
      | Learn more: https://cloud.google.com/storage/docs/uniform-bucket-level-access
      |**************************************************************************
      |
      | The following option just informs drive whether your bucket is using uniform
      | ACL or not. The actual setting needs to be toggled within the Google cloud
      | console.
      |
      */
    //   usingUniformAcl: false,
    // },
  },
})
