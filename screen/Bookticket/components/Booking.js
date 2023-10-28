import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { Image } from 'expo-image'
import { IconMenu } from '../../../Images/Images'
import { BottomSheet, Button, CheckBox, Switch } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';

import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useRef } from 'react';
import BottomSheet2 from '../../../components/BottomSheet';
import BoxItemControl from './BoxItemControl';
import CheckedItem from './CheckedItem';


const Booking = () => {
    const [isEnable, setIsEnable] = useState(false);
    const [text, setText] = useState('Khứ hồi');
    const toggleSwitch = () => {
        if (isEnable) {
            setText('Khứ hồi')
        } else {
            setText('Một chiều')
        }
        setIsEnable(previousState => !previousState)
    }
    //bottomsheet Từ - Đến
    const [isVisible, setIsVisible] = useState(false);
    //bottomsheet Chọn hạng ghế
    const [bottomSheetModalRef, setBottomSheetModalRef] = useState(null);
    const snapPoints = ["45%"]
    function handlePresentModal() {
        bottomSheetModalRef?.present();
    }
    //bottomsheet Thêm hành khách
    const [bottomSheetModalRef1, setBottomSheetModalRef1] = useState(null);
    const snapPoints1 = ["45%"]
    function handlePresentModal1() {
        bottomSheetModalRef1?.present();
    }
    const [total, setTotal] = useState(1);
    const getTotal = () => {
        setTotal(totalpassenger)
        bottomSheetModalRef1?.close();
    }
    // Hàm xử lý thêm trừ hành khách
    var [Adults, setAdults] = useState(1);
    var [Children, setChildren] = useState(0);
    var [Baby, setBaby] = useState(0);
    totalpassenger = Adults + Children + Baby;
    const handleIncreaseAdults = () => {
        let total = Children + Adults;
        if (Adults > 6) {
            setAdults(7);
        } else if (total > 6) {
            Alert.alert('Thông báo!', 'Số lượng trẻ em và hành khách không được lớn hơn 7', [
                {
                    text: 'Ok',
                },
            ]);
        }
        else {
            setAdults(Adults + 1);
        }
    }
    const handleDecreaseAdults = () => {
        if (Adults > Baby && Adults > 1) {
            setAdults(Adults - 1);
        } else if (Baby >= Adults) {
            Alert.alert('Thông báo!', 'Số lượng người lớn không được bé hơn số lượng em bé', [
                {
                    text: 'Ok',
                },
            ]);
        }
    }
    const handleIncreaseChildren = () => {
        let total = Children + Adults;
        if (total > 6) {
            Alert.alert('Thông báo!', 'Số lượng trẻ em và hành khách không được lớn hơn 7', [
                {
                    text: 'Ok',
                },
            ]);
        } else if (Children > 5) {
            setChildren(6)
        }
        else {
            setChildren(Children + 1)
        }
    }
    const handleDecreaseChildren = () => {
        if (Children <= 0) {
            setChildren(0)
        } else {
            setChildren(Children - 1)
        }
    }
    const handleIncreaseBaby = () => {
        if (Adults > Baby && Baby < 4) {
            setBaby(Baby + 1)
        }
        else if (Baby >= Adults) {
            Alert.alert('Thông báo', 'Số lượng em bé không được vượt quá số lượng của người lớn', [
                {
                    text: 'Ok',
                },
            ]);
        }
    }
    const handleDecreaseBaby = () => {
        if (Adults < Baby) {
            setBaby(Baby - 1);
        } else if (Baby <= 0) {
            setBaby(0)
        }
        else {
            setBaby(Baby - 1)
        }
    }
    //RadioButton
    const [selectedIndex, setIndex] = useState(0);
    const [SeatClass, setSeatClass] = useState('Economy');
    const getSeatClass = () => {
        
        if (selectedIndex == 0) {
            setSeatClass('Economy')
        } else if (selectedIndex == 1) {
            setSeatClass('Premium Economy')
        } else if (selectedIndex == 2) {
            setSeatClass('Business')
        } else{
            setSeatClass('First Class')
        }
        bottomSheetModalRef?.close();
    }
    const seatClass = [
        {
            id: 0,
            seatClass: 'Economy',
            description: 'Bay tiết kiệm, đáp ứng mọi nhu cầu cơ bản của bạn'
        },
        {
            id: 1,
            seatClass: 'Premium Economy',
            description: 'Chi phí hợp lý với bữa ăn ngon và chỗ để chân rộng rãi'
        },
        {
            id: 2,
            seatClass: 'Business',
            description: 'Bay đẳng cấp, với quây làm thủ tục và khu ghế ngồi riêng'
        },
        {
            id: 3,
            seatClass: 'First Class',
            description: 'Hạng cao cấp nhất, với dịch vụ 5 sao được cá nhân hoá'
        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.boxBooking}>
                <View style={styles.containerAPI}>
                    <Text>Từ</Text>
                    <TouchableOpacity style={styles.dataAPI}
                        onPress={() => setIsVisible(true)}
                    >
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.iconImage} source={IconMenu.takeoff}></Image>
                        </View>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}
                        >
                            TP HCM (SGN)
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.ButtonSwitch}

                    >
                        <Image style={styles.iconImage} source={IconMenu.iconChange}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerAPI}>
                    <Text>Đến</Text>
                    <TouchableOpacity style={styles.dataAPI}

                    >
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.iconImage} source={IconMenu.landing}></Image>
                        </View>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}
                        >
                            Huế (HUI)
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerAPI}>
                    <Text>Ngày đi</Text>
                    <TouchableOpacity style={styles.dataAPI}

                    >
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.iconImage} source={IconMenu.iconDate}></Image>
                        </View>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}
                        >
                            Thứ Sáu, 2 tháng 2 2024
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Text style={{ color: '#00c6ff' }}>{text}</Text>
                    <TouchableOpacity style={styles.ButtonSwitch}
                        onPress={toggleSwitch}
                    >
                        <Image style={styles.iconImage} source={IconMenu.iconRT}></Image>
                    </TouchableOpacity>
                </View>
                {
                    isEnable === true ?
                        (
                            <View style={styles.containerAPI}>
                                <Text>Ngày về</Text>
                                <TouchableOpacity style={styles.dataAPI}

                                >
                                    <View style={{ marginRight: 10 }}>
                                        <Image style={styles.iconImage} source={IconMenu.iconDate}></Image>
                                    </View>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}
                                    >
                                        Thứ Sáu, 2 tháng 2 2024
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) :
                        (
                            undefined
                        )
                }
                <View style={styles.containerAPI2}>
                    <View style={styles.ItemChose}>
                        <Text>Hành khách</Text>
                        <TouchableOpacity style={styles.dataAPI2}
                            onPress={handlePresentModal1}
                        >
                            <View style={{ marginRight: 10 }}>
                                <Image style={styles.iconImage} source={IconMenu.iconPassenger}></Image>
                            </View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}
                            >
                                {total} hành khách
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ItemChose}>
                        <Text>Hạng ghế</Text>
                        <TouchableOpacity style={styles.dataAPI2}
                            onPress={handlePresentModal}
                        >
                            <View style={{ marginRight: 10 }}>
                                <Image style={styles.iconImage} source={IconMenu.iconEconomy}></Image>
                            </View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}
                            >
                                {SeatClass}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerAPI}>
                    <TouchableOpacity style={styles.buttonSubmit}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <BottomSheet isVisible={isVisible}
                containerStyle={{
                    backgroundColor: 'white',
                }}
            >
                <View style={styles.containerData}>
                    <LinearGradient
                        style={styles.HeaderSheet}
                        colors={['#00c6ff', '#0072ff']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={styles.textInputData}>
                            <View style={styles.IconData}>
                                <FontAwesome name='search' color={'black'} size={18} onPress={() => { }} />
                            </View>
                            <TextInput

                                placeholder='Tìm kiếm thành phố'
                                style={{ width: '90%' }}
                            />


                        </View>
                        <TouchableOpacity style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setIsVisible(false)}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Huỷ</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <View style={styles.BodySheet}>

                    </View>
                </View>
            </BottomSheet>
            <BottomSheet2
                setBottomSheetModalRef={setBottomSheetModalRef}
                snapPoints={snapPoints}
            >
                {/* <View style={styles.container1}>
                    <View style={styles.Header1}>
                        <Text style={styles.textTitle}>Thêm hành khách</Text>
                    </View>
                    <View style={styles.Body1}>
                        <View style={styles.content}>
                            <BoxItemControl 
                                nameObject='Người lớn'
                                ageObject='Trên 12 tuổi'
                                iconObject={IconMenu.iconAdults}
                                quantity={Adults}
                                actionType1={handleDecreaseAdults}
                                actionType2={handleIncreaseAdults}
                            />
                            <BoxItemControl 
                                nameObject='Trẻ em'
                                ageObject='Từ 2-11 tuổi'
                                iconObject={IconMenu.iconChildren}
                                quantity={Children}
                                actionType1={handleDecreaseChildren}
                                actionType2={handleIncreaseChildren}
                            />
                            
                            <BoxItemControl 
                                nameObject='Em bé'
                                ageObject='Dưới 2 tuổi'
                                iconObject={IconMenu.iconBaby}
                                quantity={Baby}
                                actionType1={handleDecreaseBaby}
                                actionType2={handleIncreaseBaby}
                            />
                            
                        </View>
                    </View>
                    <View style={styles.Footer1}>
                        <TouchableOpacity style={styles.ButtonAccept}
                            onPress={getTotal}
                        >
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
                <View style={styles.container1}>
                    <View style={styles.Header1}>
                        <Text style={styles.textTitle}>Chọn hạng ghế</Text>
                    </View>
                    <View style={styles.Body1}>
                        <View style={styles.content1}>
                            {
                                seatClass.map((item, index) => {
                                    return (
                                        <CheckedItem
                                            key={index}
                                            checked={selectedIndex === item.id}
                                            actionType={() => setIndex(index)}
                                            titleSeatClass1={item.seatClass}
                                            titleSeatClass2={item.description}
                                        />
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View style={styles.Footer1}>
                        <TouchableOpacity style={styles.ButtonAccept}
                            onPress={getSeatClass}
                        >
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Passenger /> */}
            </BottomSheet2>
            <BottomSheet2 
                setBottomSheetModalRef={setBottomSheetModalRef1}
                snapPoints={snapPoints1}
            >
                <View style={styles.container1}>
                    <View style={styles.Header1}>
                        <Text style={styles.textTitle}>Thêm hành khách</Text>
                    </View>
                    <View style={styles.Body1}>
                        <View style={styles.content}>
                            <BoxItemControl
                                nameObject='Người lớn'
                                ageObject='Trên 12 tuổi'
                                iconObject={IconMenu.iconAdults}
                                quantity={Adults}
                                actionType1={handleDecreaseAdults}
                                actionType2={handleIncreaseAdults}
                            />
                            <BoxItemControl
                                nameObject='Trẻ em'
                                ageObject='Từ 2-11 tuổi'
                                iconObject={IconMenu.iconChildren}
                                quantity={Children}
                                actionType1={handleDecreaseChildren}
                                actionType2={handleIncreaseChildren}
                            />

                            <BoxItemControl
                                nameObject='Em bé'
                                ageObject='Dưới 2 tuổi'
                                iconObject={IconMenu.iconBaby}
                                quantity={Baby}
                                actionType1={handleDecreaseBaby}
                                actionType2={handleIncreaseBaby}
                            />

                        </View>
                    </View>
                    <View style={styles.Footer1}>
                        <TouchableOpacity style={styles.ButtonAccept}
                            onPress={getTotal}
                        >
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet2>
        </View>
    )
}

export default Booking

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    boxBooking: {
        width: '100%',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 5,
        paddingTop: 5,
    },
    containerAPI: {
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    containerAPI2: {
        paddingHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    iconImage: {
        width: 30,
        height: 30,
    },
    dataAPI: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    dataAPI2: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    ItemChose: {
        width: '50%',
        paddingHorizontal: 5,
    },
    buttonSubmit: {
        backgroundColor: '#E87920',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
    },
    containerData: {
        flex: 1,
        backgroundColor: 'white',
    },
    HeaderSheet: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },
    textInputData: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        alignItems: 'center'
    },
    IconData: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
    },
    BodySheet: {
        width: '100%',
        height: 1000
    },
    buttonSetText: {
        width: 20,
        height: 20,
        backgroundColor: 'gray',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // BottomSheet thêm hành khách
    container1: {
        flex: 10,
    },
    Header1: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1CA0D3'
    },
    Body1: {
        flex: 6,
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    content: {
        padding: 25,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    Footer1: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonAccept: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 60,
        backgroundColor: '#1CA0D3',
        borderRadius: 100,
    },
    //Style chọn hạng ghế
    content1: {
        padding: 20,
    },

})