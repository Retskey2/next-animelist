import {Header} from "../components/Header/Header";

export default {
    title: 'UI/head',
    component: Header,
}
const Template = (arg) => <Header {...arg}/>

export const Default = Template.bind({})
Default.args = {}