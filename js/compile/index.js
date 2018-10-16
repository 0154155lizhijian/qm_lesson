const html = `
    <view>
        <text>{{username}}</text>
    </view>
`;
let username = '唐唐';

// {{}}
// 在模板中,查找{{key}}
// 替换成 username 变量的值  replace
function compile(html){

    return html;
}
const compileHTML = compile(html);

