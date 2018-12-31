enum PostStatus{
    Unpublished =0,
    Published=1,
    Draft =-1,
}
interface Post{
    title:string;
    content?:string;
    status:PostStatus;
}
let post: Post = {
    title:'过五关斩六将，去了货',
    status:PostStatus.Published,
    content:'春招以来，我的面试这样一个过程',
}

console.log(post)
console.log(PostStatus[0])