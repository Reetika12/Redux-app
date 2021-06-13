export const increment=(num)=>{
    return {
        type:'INCREMENT',
        data:num
    }
}
export const decrement=()=>{
    return {
        type:'DECREMENT'
    }
}