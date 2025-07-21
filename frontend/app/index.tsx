import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity,  } from 'react-native';
import PagerView from 'react-native-pager-view'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function OnboardingCarousel() {
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0); 
  const router = useRouter();

  const commonGradientProps = {
    colors: [
      'rgba(106, 145, 121, 1)',
      'rgba(106, 145, 121, 1)',
      'rgba(176, 172, 111, 1)',
    ] as const,
    start: { x: 0.1, y: 0.2 },
    end: { x: 0.8, y: 0.1 },
  };

  interface PagerViewRef {
    setPage: (selectedPage: number) => void;
  }

  const goToPage = (pageIndex: number) => {
    if (pagerRef.current) {
      (pagerRef.current as PagerViewRef).setPage(pageIndex);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  const handleLogin = () => {
   
    goToPage(2);
  };

  const handleSignUp = () => {
  
    router.replace('/');
  };

  return (
    <View style={styles.container}>

      
      {currentPage > 0 && (
        <TouchableOpacity style={styles.backButton} onPress={goToPreviousPage}>
          <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
      )}

      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        scrollEnabled={true}
        onPageSelected={({ nativeEvent }) => setCurrentPage(nativeEvent.position)}
      >
       
        <LinearGradient
          key="1"
          {...commonGradientProps}
          style={styles.page}
        >
          <Text style={styles.pageText}>Take Control of Your Money</Text>
          <Image
            source={require('../assets/images/bank-removebg-preview.png')}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => goToPage(1)} 
          >
            <Text style={styles.customButtonText}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          key="2"
          {...commonGradientProps}
          style={styles.page}
        >
          <Text style={styles.pageText}>Join Us Today!</Text>
          <Image
            source={require('../assets/images/logo-removebg-preview.png')} 
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ddd"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ddd"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.customButton}
            onPress={handleSignUp}
          >
            <Text style={styles.customButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{ height: 10 }} />
          <TouchableOpacity
            style={styles.customButton}
            onPress={handleLogin} 
          >
            <Text style={styles.customButtonText}>Log In</Text>
          </TouchableOpacity>
        </LinearGradient>

       
        <LinearGradient
          key="3"
          {...commonGradientProps}
          style={styles.page}
        >
            <Image
            source={require('../assets/images/chart-removebg-preview.png')} 
            style={styles.image}
          />
          <Text style={styles.pageText}>Manage Your Investments</Text>
          <Text style={styles.subText}>Grow your wealth effortlessly.</Text>
            <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ddd"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ddd"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => router.replace('/')} 
          >
            <Text style={styles.customButtonText}>Go to App</Text>
          </TouchableOpacity>
        </LinearGradient>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300, 
    marginBottom: 5,
    resizeMode: 'contain',
  },
  pageText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 15, 
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 100,
    padding: 15,
    marginBottom:5,
    fontSize: 16,
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  customButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '60%',
    alignItems: 'center',
    marginTop: 10, // Adjusted marginTop for custom buttons
  },
  customButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});