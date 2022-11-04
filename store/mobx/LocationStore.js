import { action, makeObservable, observable, toJS } from "mobx"
import { toast } from "react-toastify"

class LocationStore {
  locations = []

  constructor() {
    makeObservable(this, {
      locations: observable,
      addLocation: action,
    })
  }
  addLocation(location) {
    this.locations.push(location)
    console.log(toJS(this.locations))
    toast.success("Successfully Added")
  }
  getOneLocation(id) {
    const index = this.locations.findIndex((x) => x.id == id)
    if (index != -1) {
      return this.locations[index]
    }
  }
  deleteLocation(id) {
    this.locations.splice(
      this.locations.findIndex((a) => a.id == id),
      1
    )
    toast.success("Successfully Deleted")
  }
  updateLocation(id, location) {
    const index = this.locations.findIndex((x) => x.id == id)
    if (index != -1) {
      this.locations[index] = location
    }
    toast.success("Successfully Updated")
  }
}
export default LocationStore
