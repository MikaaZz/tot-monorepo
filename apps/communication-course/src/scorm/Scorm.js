import { SCORM } from 'pipwerks-scorm-api-wrapper'

const Scorm = {
  init() {
    SCORM.init()
  },

  getData(cmiData) {
    const dataGetting = SCORM.get(cmiData)
    return dataGetting
  },

  setData(cmiData, data) {
    const dataSetting = SCORM.set(cmiData, data)
    return dataSetting
  },

  finish() {
    console.log('you have finished!')
    SCORM.set('cmi.core.lesson_status', 'completed')
    SCORM.save()
  },
}

export default Scorm
