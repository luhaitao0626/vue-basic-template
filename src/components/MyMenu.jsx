
import { createNamespacedHelpers } from "vuex"
import { List } from "_vant@2.12.30@vant";
let mapState = createNamespacedHelpers('user')
export default {
    data() {
        return {
            list: [],
        }
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        getMenuList(authList) {
            let menu = [];
            let map = {};
            authList.forEach(m => {
                let id = m.id;
                let pid = m.pid;
                m.children = []
                map[id] = m;
                if (m.pid === -1) {
                    menu.push(m);
                } else {
                    map[pid] && map[pid].children.push(m);
                }
            })
            return menu
        }
    },
    mounted() {
        this.list = this.getMenuList(this.userInfo.authList)
    },
    render() {

        let renderChildren = (list) => {
            return list.map(child => {
                return child.children.length ?
                    <el-submenu index={child._id} >
                        <template slot="title">
                            <span>{child.name}</span>
                        </template>
                        {renderChildren(child.children)}
                    </el-submenu>
                    : <menu-item index={child.path}>{child.name}</menu-item>
            })
        }
        return <el-menu
            background-color="#333"
            text-color="#fff"
            active-text-color="#ffd04b"
            class="menu"
            router={true}
        >
            {renderChildren(this.list)}
        </el-menu>

    }
}