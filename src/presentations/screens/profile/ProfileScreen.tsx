import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'

export const ProfileScreen = () => {
const {name,email}=useProfileStore()
// const name = useProfileStore(state => state.name)

  return (
    <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}> {email}</Text>

      <Pressable
       style={styles.buttonCenter}
       onPress={() => useProfileStore.setState({name:'Meyling Arias'})}
       >
      
             <Text style={styles.subTitle}>Cambiar Nombre</Text>
      
     
      </Pressable>

  </View>
  )
}
