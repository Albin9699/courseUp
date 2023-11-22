export const formatprice = (price:number) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency:"INR"
    }).format(price)
}

// http://localhost:3000/teacher/courses/589609a2-18b8-48ad-be76-9536de94c778