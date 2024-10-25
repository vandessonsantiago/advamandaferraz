import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";

const query = `query {
      posts {
          edges {
            node {
              title
              excerpt
              date
              slug
              featuredImage {
                node {
                  sourceUrl
                }
              }
            categories {
              edges {
                node {
                  name
                }
              }
            }
            tags {
              edges {
                node {
                  name
                }
              }
            }
              content
            }
          }
        }
      }`;

const headers = {
  "Content-Type": "application/json",
  // Adicione cabeçalhos CORS se necessário
};

export default function BlogComponnent() {
  const urlApi = "https://blog.advogadaamandaferraz.com/graphql";
  console.log(urlApi);

  const [allposts, setAllPosts] = useState();

  useEffect(() => {
    async function GetPosts() {
      const response = await fetch(urlApi, {
        headers,
        method: "POST",
        body: JSON.stringify({
          query,
        }),
      });

      const data = await response.json();
      console.log(data);
      setAllPosts(data?.data);
    }
    GetPosts();
  }, []);

  return (
    <div>
      {allposts && allposts.posts.edges.length > 0 && (
        <div className="bg-greenColor bg-opacity-40 py-4">
          <div className="mx-auto desktop:max-w-5xl desktop:flex gap-8 mb-10">
            {allposts.posts.edges.slice(0, 3).map((post, index) => (
              <a href={`/blog/${post.node.slug}`} key={index}>
                <div className="mx-4 desktop:mb-0 mb-4 transition-transform transform hover:scale-105">
                  <div className="relative desktop:w-80 h-40">
                    <img
                      src={post.node.featuredImage.node.sourceUrl}
                      alt={post.node.title}
                      className="rounded-t-lg w-full h-full object-none absolute inset-0 mx-auto"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div className=" absolute w-full bottom-[-38px] flex justify-center z-20 p-2">
                      <div className="bg-#7f948e rounded-full p-1">
                        <img
                          src="../src/images/logo-blog.png"
                          alt="Logo Blog"
                          className="rounded-t-lg w-52px h-52px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative desktop:w-80 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                    <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                      {post.node.categories.edges.map((category) => (
                        <span key={category.node.id}>{category.node.name}</span>
                      ))}
                    </div>
                    <div className="border-b-2 border-primary-500 w-8"></div>
                    <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                      {format(new Date(post.node.date), "dd/MM/yyyy")}
                    </div>
                    <h2 className=" mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                      {post.node.title}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
