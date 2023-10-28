import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

const BottomSheet2 = ({ children = () => {
    return <View />
}, snapPoints = [200, 500], setBottomSheetModalRef = () => { return null },onClose }) => {
    const bottomSheetRef = useRef(null);
    useEffect(() => {
        setBottomSheetModalRef(bottomSheetRef.current)
    }, [])
    console.log('vôday');
    // mouting , update, unmount
    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enableDismissOnClose={onClose}
        >
            {children}
        </BottomSheetModal>
    )
}

export default BottomSheet2

const styles = StyleSheet.create({
    
})