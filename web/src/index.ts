import User from "./models/User";
import UserEdit from "./views/UserEdit";

const collection = User.buildCollection();

collection.fetch();

setTimeout(() => {
    const root = document.getElementById("root");
    if (root) {
        const userEdit = new UserEdit(root, collection.models[0])
        userEdit.render();
    }
}, 50)
