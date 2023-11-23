import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../theme/colors';
import Title1 from '../../../components/texts/Title1';
import Typography from '../../../components/texts/Typography';
import LocationChip from '../../../components/chip/LocationChip';
import Divider from '../../../components/Divider';
import GroupMemberCard from '../../../components/cards/GroupMemberCard';
import { groupMembers } from '../../../assets/data/homeFeed';

const MyPlans = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ borderWidth: 1.5, borderRadius: 32, borderColor: COLORS.gray.medium, overflow: 'hidden' }}>
                <Image source={{uri: 'https://i.pinimg.com/236x/7f/3a/e1/7f3ae1df3d4861ac9a4ffbce1cca8161.jpg'}} style={styles.image} />

                <View style={{ padding: 16 }}>
                    <View style={{ flexWrap: 'nowrap', gap: 8 }}>
                        <Title1 size={20}>Plan Name</Title1>
                        <Typography weight={'regular'} color={COLORS.black}>
                            Plan Type
                        </Typography>
                        <Typography weight={'regular'} size={12}>
                            Address
                        </Typography>
                    </View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginVertical: 16 }}>
                        <LocationChip
                            style={{ backgroundColor: COLORS.mistyRose }}
                            color={COLORS.black}
                            icon={'MarkerPin'}
                            distance={'4 mi'}
                        />
                        <LocationChip
                            style={{ backgroundColor: COLORS.mistyRose }}
                            color={COLORS.black}
                            icon={'MarkerPin'}
                            distance={'Sept 15'}
                        />
                        <LocationChip
                            style={{ backgroundColor: COLORS.mistyRose }}
                            color={COLORS.black}
                            icon={'Calendar'}
                            distance={'8:00 pm - 11:00 pm'}
                        />
                    </View>

                    <Divider />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'nowrap', gap: 8, alignItems: 'center' }}>
                            <Typography weight={'medium'} color={COLORS.darkGreen}>
                                Invited by
                            </Typography>

                            <Image
                                source={{uri: 'https://i.pinimg.com/236x/aa/11/e8/aa11e8474aacc650148f8277835c999f.jpg'}}
                                style={{ width: 24, aspectRatio: 1, borderRadius: 15, backgroundColor: COLORS.gray.medium }}
                            />

                            <Typography weight={'medium'} color={COLORS.darkGreen}>
                                Camilie
                            </Typography>
                        </View>

                        <Typography weight={'medium'}>12 days ago</Typography>
                    </View>

                    <Divider />

                    <View style={{ paddingVertical: 16 }}>
                        <Typography weight={'medium'} color={COLORS.black}>
                            Your Group
                        </Typography>

                        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginVertical: 5}}>
                            {groupMembers?.slice(0,3)?.map(item => (
                                <GroupMemberCard key={item?.avatar} avatar={item?.avatar} label={item?.title} />
                            ))}
                        </View>


                        <Typography weight={'medium'} color={COLORS.black}>
                            Riley's Group
                        </Typography>

                        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginVertical: 5}}>
                            {groupMembers?.slice(3,6)?.map(item => (
                                <GroupMemberCard key={item?.avatar} avatar={item?.avatar} label={item?.title} />
                            ))}
                        </View>
                    </View>
        
                    <TouchableOpacity style={{padding: 12, backgroundColor: COLORS.tyrianPurple, borderRadius: 30}}>
                        <Typography weight={'medium'} color={COLORS.white} style={{textAlign: 'center'}}>Group Chat</Typography>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{height: 120}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 15,
    },
    image: {
        width: '100%',
        aspectRatio: 2.2,
        backgroundColor: COLORS.gray.medium,
    },
});

export default MyPlans;
