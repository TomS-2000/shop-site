import type { Product } from "@/types/product"
import { Star } from "lucide-react"


const ProductRightSideBar = ({product}: {product: Product}) => {
    return (
        <section>
            <div className='text-lg font-bold'>{product.price} $</div>
            <div>
                <div className='flex'>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                            key={i}
                            className={`stroke-zinc-950 size-5 bg-neutral-700 ${Math.round(product.rating) >= i ? ' fill-zinc-950' : ''}`}
                        />
                    ))}
                </div>
                <p className='font-bold'>{product.rating}</p>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia ratione ducimus tenetur vitae totam saepe nisi repellendus aperiam quibusdam accusantium maxime recusandae, asperiores quidem est. Vitae porro id debitis!
            Vitae, rerum corporis provident vero ipsum et iste necessitatibus? Dignissimos quasi repellat numquam modi earum tenetur architecto temporibus dolorem ipsum quae, voluptatem quis id unde dolore et pariatur quia fugit!
            Quos repellat ratione dolorum suscipit reprehenderit dignissimos neque nihil culpa enim odit numquam dolores tenetur, eum ea natus hic sint impedit accusamus aspernatur pariatur facilis. Quia dolore quam omnis recusandae.
            Exercitationem itaque perspiciatis, eligendi minus nisi beatae maxime, rerum aspernatur consequuntur tenetur ex neque, esse recusandae est labore unde cupiditate sint quas magni enim ab cumque explicabo maiores soluta. Possimus!
            Beatae ut, temporibus recusandae velit nulla unde consectetur cum voluptates minus vel ipsum earum porro saepe illum minima itaque natus culpa perspiciatis praesentium animi exercitationem molestias. Cupiditate incidunt amet ratione.
            Quaerat quod reprehenderit aliquid laboriosam nam itaque voluptas soluta officiis modi odit repellat maxime explicabo inventore similique praesentium tempore neque esse error, labore fugit voluptatibus veniam unde ad earum. Expedita.
            Voluptates praesentium asperiores libero ratione maxime nulla enim, ea autem obcaecati, ducimus quas expedita architecto consequatur eos nihil adipisci ad exercitationem corrupti fugiat? Placeat numquam labore nulla asperiores? Necessitatibus, natus!
            Et repudiandae maiores quibusdam totam fugiat doloribus, labore quod laudantium quia tenetur! Nisi eveniet natus et nihil eaque debitis laborum accusantium, molestias quo! Suscipit nulla repellat iusto nemo, eius explicabo.
            Reiciendis ea maiores perspiciatis doloribus quisquam asperiores necessitatibus dolorem accusantium facere? Voluptatem dolor numquam sed in voluptate consectetur quidem iste explicabo vitae, aspernatur laborum et distinctio facere sit quibusdam natus.
            Natus, dolorem in ipsa dicta explicabo doloremque ducimus dolores alias quo ipsam, voluptatum blanditiis distinctio? Laborum, soluta tenetur explicabo inventore ex fugiat eius ullam iure libero, repellat, sunt maiores error.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia ratione ducimus tenetur vitae totam saepe nisi repellendus aperiam quibusdam accusantium maxime recusandae, asperiores quidem est. Vitae porro id debitis!
            Vitae, rerum corporis provident vero ipsum et iste necessitatibus? Dignissimos quasi repellat numquam modi earum tenetur architecto temporibus dolorem ipsum quae, voluptatem quis id unde dolore et pariatur quia fugit!
            Quos repellat ratione dolorum suscipit reprehenderit dignissimos neque nihil culpa enim odit numquam dolores tenetur, eum ea natus hic sint impedit accusamus aspernatur pariatur facilis. Quia dolore quam omnis recusandae.
            Exercitationem itaque perspiciatis, eligendi minus nisi beatae maxime, rerum aspernatur consequuntur tenetur ex neque, esse recusandae est labore unde cupiditate sint quas magni enim ab cumque explicabo maiores soluta. Possimus!
            Beatae ut, temporibus recusandae velit nulla unde consectetur cum voluptates minus vel ipsum earum porro saepe illum minima itaque natus culpa perspiciatis praesentium animi exercitationem molestias. Cupiditate incidunt amet ratione.
            Quaerat quod reprehenderit aliquid laboriosam nam itaque voluptas soluta officiis modi odit repellat maxime explicabo inventore similique praesentium tempore neque esse error, labore fugit voluptatibus veniam unde ad earum. Expedita.
            Voluptates praesentium asperiores libero ratione maxime nulla enim, ea autem obcaecati, ducimus quas expedita architecto consequatur eos nihil adipisci ad exercitationem corrupti fugiat? Placeat numquam labore nulla asperiores? Necessitatibus, natus!
            Et repudiandae maiores quibusdam totam fugiat doloribus, labore quod laudantium quia tenetur! Nisi eveniet natus et nihil eaque debitis laborum accusantium, molestias quo! Suscipit nulla repellat iusto nemo, eius explicabo.
            Reiciendis ea maiores perspiciatis doloribus quisquam asperiores necessitatibus dolorem accusantium facere? Voluptatem dolor numquam sed in voluptate consectetur quidem iste explicabo vitae, aspernatur laborum et distinctio facere sit quibusdam natus.
            Natus, dolorem in ipsa dicta explicabo doloremque ducimus dolores alias quo ipsam, voluptatum blanditiis distinctio? Laborum, soluta tenetur explicabo inventore ex fugiat eius ullam iure libero, repellat, sunt maiores error.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia ratione ducimus tenetur vitae totam saepe nisi repellendus aperiam quibusdam accusantium maxime recusandae, asperiores quidem est. Vitae porro id debitis!
            Vitae, rerum corporis provident vero ipsum et iste necessitatibus? Dignissimos quasi repellat numquam modi earum tenetur architecto temporibus dolorem ipsum quae, voluptatem quis id unde dolore et pariatur quia fugit!
            Quos repellat ratione dolorum suscipit reprehenderit dignissimos neque nihil culpa enim odit numquam dolores tenetur, eum ea natus hic sint impedit accusamus aspernatur pariatur facilis. Quia dolore quam omnis recusandae.
            Exercitationem itaque perspiciatis, eligendi minus nisi beatae maxime, rerum aspernatur consequuntur tenetur ex neque, esse recusandae est labore unde cupiditate sint quas magni enim ab cumque explicabo maiores soluta. Possimus!
            Beatae ut, temporibus recusandae velit nulla unde consectetur cum voluptates minus vel ipsum earum porro saepe illum minima itaque natus culpa perspiciatis praesentium animi exercitationem molestias. Cupiditate incidunt amet ratione.
            Quaerat quod reprehenderit aliquid laboriosam nam itaque voluptas soluta officiis modi odit repellat maxime explicabo inventore similique praesentium tempore neque esse error, labore fugit voluptatibus veniam unde ad earum. Expedita.
            Voluptates praesentium asperiores libero ratione maxime nulla enim, ea autem obcaecati, ducimus quas expedita architecto consequatur eos nihil adipisci ad exercitationem corrupti fugiat? Placeat numquam labore nulla asperiores? Necessitatibus, natus!
            Et repudiandae maiores quibusdam totam fugiat doloribus, labore quod laudantium quia tenetur! Nisi eveniet natus et nihil eaque debitis laborum accusantium, molestias quo! Suscipit nulla repellat iusto nemo, eius explicabo.
            Reiciendis ea maiores perspiciatis doloribus quisquam asperiores necessitatibus dolorem accusantium facere? Voluptatem dolor numquam sed in voluptate consectetur quidem iste explicabo vitae, aspernatur laborum et distinctio facere sit quibusdam natus.
            Natus, dolorem in ipsa dicta explicabo doloremque ducimus dolores alias quo ipsam, voluptatum blanditiis distinctio? Laborum, soluta tenetur explicabo inventore ex fugiat eius ullam iure libero, repellat, sunt maiores error.</p>
        </section>
    )
}

export default ProductRightSideBar