import { EventFactory, Types } from '@ellementul/uee-core'

const type = Types.Object.Def({
  system: "Timing",
  entity: "Time",
  state: {
    mstime: Types.Index.Def(100*365*24*60*60*1000) //Limit about 100 years from Unix start
  }
}, true)

export default EventFactory(type)