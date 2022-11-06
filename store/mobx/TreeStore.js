import { action, makeObservable, observable, toJS } from "mobx"
import { toast } from "react-toastify"

class TreeStore {
  trees = []

  constructor() {
    makeObservable(this, {
      trees: observable,
      addTree: action,
    })
  }
  addTree(tree) {
    this.trees.push(tree)
    toast.success("Successfully Added")
  }
  getOneTree(id) {
    const index = this.trees.findIndex((x) => x.id == id)
    if (index != -1) {
      return this.trees[index]
    }
  }
  deleteTrees(id) {
    this.trees.splice(
      this.trees.findIndex((a) => a.id == id),
      1
    )
    toast.success("Successfully Deleted")
  }
  updateTrees(id, tree) {
    const index = this.trees.findIndex((x) => x.id == id)
    if (index != -1) {
      this.trees[index] = tree
      toast.success("Successfully Updated")
    }
  }
}
export default TreeStore
