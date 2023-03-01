import { useEffect, useState } from 'react';

import { LoadingSkeleton } from './components/LoadingSkeleton';

interface Idatas {
  text: string,
  image: string
}

export default function App() {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000)

  const datas: Idatas[] = [
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quisquam qui perspiciatis eaque.',
      image: 'logo512.png'
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quisquam qui perspiciatis eaque.',
      image: 'logo512.png'
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quisquam qui perspiciatis eaque.',
      image: 'logo512.png'
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quisquam qui perspiciatis eaque.',
      image: 'logo512.png'
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quisquam qui perspiciatis eaque.',
      image: 'logo512.png'
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quisquam qui perspiciatis eaque.',
      image: 'logo512.png'
    }
  ]

  return (
    isLoading ? 
      <LoadingSkeleton /> :

      <main>
        <h2>Screen Skeleton</h2>

        <section>
          { datas.map((item, key) => (
            <article key={key}>
              <img src={item.image} width={50} height={50} alt='Image' />

              <p>{ item.text }</p>
            </article>
          ))}
        </section>
      </main>
  )
}
