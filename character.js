const decryptId = (id) => {
    return parseInt(id, 36)
  }
  
  
  //funcao resposavel por fazer requisao API
  const loadCharacter = async (url,id) => {
    try {
      const res = await fetch(`${url}/${id}`)
      if(!res.ok){
        throw new Error('Erro ao carregar o personagem')
      }
      const data = await res.json()
  
      return data
    } catch (error) {
      console.log('Error', error)
    }
  }
  
  const loadAll = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams)
    const idParam = urlParams.get('id')
    console.log(idParam)
  
    if(!idParam){
  
      console.log('No id')
      return
    }
  
    const idDescrypted = decryptId(idParam)
    console.log(idDescrypted)
    const baseUrl = 'https://rickandmortyapi.com/api/character/'
  
    try {
      const character = await loadCharacter(baseUrl, idDescrypted)
      showCharacter(character)
    } catch (error) {
      console.log(error)
  }
  
  }
  loadAll()
  const showCharacter = (character) => {
    console.log(character)
  }