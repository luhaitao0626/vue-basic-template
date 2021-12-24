import Vue from 'vue'
import {
    Button,
    Header,
    Footer,
    Main,
    Container,
    Row,
    Col,
    Table,
    TableColumn,
    Progress,
    Menu,
    MenuItem,
    Submenu,
    Carousel,
    CarouselItem,
    Message,
    Form,
    FormItem,
    Input
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

const components = {
    Button,
    Header,
    Footer,
    Main,
    Container,
    Row,
    Col,
    Table,
    TableColumn,
    Progress,
    Menu,
    MenuItem,
    Submenu,
    Carousel,
    CarouselItem,
    Message,
    Form,
    FormItem,
    Input,
}

Object.values(components).forEach(component => {
    Vue.use(component)
});

Vue.prototype.$message = Message
