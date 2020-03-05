import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, ScrollView, TextInput, Picker, Button } from 'react-native';
import SubjectItem from './subject-item';

export default function App() {

  const [nameLogin, setNameLogin] = useState("");
  const [yearOld, setYearOld] = useState();

  const userProfile = [
    {
      thumbnail: 'https://static1.bestie.vn/Mlog/ImageContent/201906/chiec-chuong-nho-cua-doraemon-da-dung-va-nhieu-ky-niem-cua-nobita-a41452.jpg',
      name: 'Doraemon',
      category: 'Thiếu nhi',
      total_chapters: 70,
      is_full: true,
    },
    {
      thumbnail: 'https://www.giaoduc.edu.vn/upload/images/2019/04/27/tham-tu-lung-danh-conan-dung-lai-sau-25-nam-conan-khong-chi-la-cua-tuoi-tho-1.jpg',
      name: 'Thám tử lừng danh conan',
      category: 'Trinh Thám',
      total_chapters: 100,
      is_full: false,
    },
    {
      thumbnail: 'https://i.pinimg.com/originals/6b/ec/00/6bec00550eb3f44629df18e088364f18.jpg',
      name: 'Đấu la đại lục',
      category: 'chiến tranh',
      total_chapters: 35,
      is_full: true,
    },
    {
      thumbnail: 'https://imageinstant.com/data/images/19432/403362/001.jpg',
      name: 'ma đạo tổ sư',
      category: 'kiếm hiệp',
      total_chapters: 1,
      is_full: false,
    }
    ,
    {
      thumbnail: 'http://st.nettruyen.com/data/comics/113/ban-trai-dieu-khien-giac-mo.jpg',
      name: 'Bạn trai điều khiển giấc mơ',
      category: 'ngôn tình',
      total_chapters: 9,
      is_full: true,
    }
    ,
    {
      thumbnail: 'http://st.nettruyen.com/data/comics/128/thien-kim-bat-hoan.jpg',
      name: 'thiên kim bất hoán',
      category: 'ngôn tình',
      total_chapters: 6,
      is_full: true,
    }
    ,
    {
      thumbnail: 'http://st.nettruyen.com/data/comics/178/kim-bai-diem-the.jpg',
      name: 'kim bài điềm thê',
      category: 'ngôn tình',
      total_chapters: 3,
      is_full: false,
    }
  ];

  const [user, setUser] = useState(userProfile);
  const [showModal, setShowModal] = useState(true);
  const [login, setLogin] = useState(false);

  const handleDeleteSubject = (name) => {
    // su dung let de co the gan gia tri moi
    let newUser = user;
    // filter ((item) => tra ve dieu kien ma item do se duoc xu ly)
    // sau khi filter xong (chay het vong lap voi dieu kien dua ra) -> tra ve mang moi co cac item thoa man dk
    newUser = newUser.filter((userProfile) => userProfile.name != name);
    setUser(newUser);
  }

  const checkLogin = () => {
    if (user !== "" && yearOld > 18) {
      setLogin(true);
      setShowModal(false)
    } else {
      setLogin(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textNameLogin}>Chào: {nameLogin}</Text>
      <FlatList
        data={user}
        renderItem={({ item }) => (
          <SubjectItem item={item} handleDelete={handleDeleteSubject} />
        )}
        keyExtractor={(item, index) => index}

      />
      <Modal visible={showModal} >
        <ScrollView>


          <View style={styles.modal}>
            <Text style={styles.text} >Nhập thông tin</Text>
            <Text style={styles.textModal} >Tên</Text>
            <TextInput style={styles.input} onChangeText={(valueName) => setNameLogin(valueName)} />

            <Text style={styles.textModal} >Tuổi</Text>
            <TextInput style={styles.input} onChangeText={(yearOld) => setYearOld(yearOld)} />

            <Button
              title="Go"
              onPress={() =>checkLogin()}
            />
          </View>
        </ScrollView>

      </Modal>
    </View>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  textNameLogin: {
    fontSize: 23,
    fontStyle: 'italic'
  },
  textModal: {
    padding: 8,
    margin: 10,
  },
  modal: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,

  },

});
