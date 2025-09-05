export const qServices = `*[_type=="service"]|order(order asc){
  title,
  "slug": slug.current,
  duration,
  priceText,
  description,
  "photo": photo.asset->url
}`;

export const qServiceBySlug = `*[_type=="service" && slug.current==$slug][0]{
  title,
  "slug": slug.current,
  duration,
  priceText,
  description,
  "photo": photo.asset->url
}`;
