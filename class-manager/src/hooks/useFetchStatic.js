export const getStaticProps =async({url}) => {
    const res = await fetch(url)
    const data = await res.json()
  
    return {
      props: {classes: data}
    }
  }
  