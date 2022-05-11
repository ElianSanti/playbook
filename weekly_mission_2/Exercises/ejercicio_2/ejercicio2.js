const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

const obtenerDatos = (objeto) => {   
    //Iterar nombre y stacks 
    objeto.forEach((explorer)=>{
        console.log(`Nombre: ${explorer.name} \nStacks: ${explorer.stack}`)
    })
    
    //Creacion de nueva lista
    const newList = objeto.map(explorer=>explorer.stack)

    //Filtrar js en la nueva lista
    const filtrado = newList.filter(stacks=> stacks.includes('js'))
    console.log(filtrado)

    //Buscar explorer de la CDMX
    const cityExplorer = objeto.find(explorer=> explorer.city = 'CDMX')
    console.log(cityExplorer)
    
    //Suma de exercises_completed
    //const total = 0
    const ejerciciosCompletados = objeto.map(ejercicios=>ejercicios.exercises_completed)
    const totalExercises = ejerciciosCompletados.reduce((total, exercises_completed)=>{
        return total + exercises_completed
    })
    console.log(`Total de ejercicios completados: ${totalExercises}`)

    //Validaciones
    //Mision Frontend
    const exercisesFinished = (explorer) => explorer.missions.frontend.isFinished === true
    console.log(`Al menos un explorer completo la mision frontend? ${objeto.some(exercisesFinished)}`)

    //OnBoarding
    const onBoarding = (explorer) => explorer.missions.onboarding.isFinished === true
    console.log(`Finalizaron todos el onboarding? ${objeto.every(onBoarding)}`)
}


obtenerDatos(explorers)
