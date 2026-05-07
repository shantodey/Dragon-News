export async function gateCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data;
}
export async function getNewsByCategoriesID(categoriesID) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoriesID}`);
    const data = await res.json();
    return data.data;
}
export async function getNewsDetelsByID(news_Id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_Id}`);
    const data = await res.json();
    return data.data[0];
}