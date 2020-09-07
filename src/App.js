import React, { useState, useEffect } from "react";
import NavBar from "./components/common/NavBar";
import ParallaxImage from './components/ParallaxImage'
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  

  const [scrolledPosition, setSrolledPosition] = useState(0);
  const [showNav, setShowNav] = useState(true);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (scrolledPosition > currentPosition) {
      setShowNav(true);
      // document.querySelector('.navbar').style.top = "0"
    } else {
      setShowNav(false);
      // document.querySelector('.navbar').style.top = "-50px"
    }
    setSrolledPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <NavBar showNav={showNav} />
      <ParallaxImage />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet
        consectetur adipiscing elit. Eget mi proin sed libero. Quis imperdiet
        massa tincidunt nunc pulvinar sapien. Dictum non consectetur a erat nam
        at lectus urna duis. Ut venenatis tellus in metus vulputate eu. Nec dui
        nunc mattis enim ut tellus elementum sagittis. Arcu cursus vitae congue
        mauris rhoncus aenean. Suspendisse in est ante in. Magna sit amet purus
        gravida quis blandit turpis cursus. Aliquet eget sit amet tellus cras
        adipiscing. In iaculis nunc sed augue. Donec enim diam vulputate ut. Vel
        pretium lectus quam id leo in vitae turpis. Varius duis at consectetur
        lorem donec massa sapien. Scelerisque eleifend donec pretium vulputate.
        Ultrices gravida dictum fusce ut placerat orci. Sollicitudin tempor id
        eu nisl nunc mi ipsum faucibus. Molestie a iaculis at erat. Aliquet enim
        tortor at auctor. Libero id faucibus nisl tincidunt eget nullam non nisi
        est. Arcu dictum varius duis at consectetur lorem donec. Ante metus
        dictum at tempor commodo ullamcorper a lacus vestibulum. Id aliquet
        lectus proin nibh nisl condimentum id venenatis. Diam sollicitudin
        tempor id eu. Porttitor lacus luctus accumsan tortor posuere ac ut. Sit
        amet facilisis magna etiam tempor orci eu lobortis. Mauris cursus mattis
        molestie a. Posuere ac ut consequat semper viverra nam libero justo.
        Viverra suspendisse potenti nullam ac. Odio ut sem nulla pharetra diam
        sit amet. Neque laoreet suspendisse interdum consectetur libero id.
        Lorem sed risus ultricies tristique nulla. Cras fermentum odio eu
        feugiat pretium nibh. Blandit turpis cursus in hac habitasse platea. Cum
        sociis natoque penatibus et magnis dis parturient montes nascetur. Sed
        id semper risus in. Gravida neque convallis a cras semper. Praesent
        semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Sit
        amet cursus sit amet dictum sit amet. Eget nunc lobortis mattis aliquam
        faucibus purus in. Vitae et leo duis ut. Nisl pretium fusce id velit.
        Pellentesque eu tincidunt tortor aliquam nulla facilisi. Tristique nulla
        aliquet enim tortor at auctor urna. Et sollicitudin ac orci phasellus
        egestas. Quis ipsum suspendisse ultrices gravida. Sagittis aliquam
        malesuada bibendum arcu vitae elementum curabitur vitae nunc. Et
        malesuada fames ac turpis egestas. Morbi tristique senectus et netus et
        malesuada. Tristique senectus et netus et malesuada fames ac turpis.
        Neque laoreet suspendisse interdum consectetur libero id faucibus nisl.
        Urna molestie at elementum eu facilisis sed. Nunc pulvinar sapien et
        ligula. Volutpat odio facilisis mauris sit amet massa vitae tortor
        condimentum. Phasellus vestibulum lorem sed risus ultricies tristique
        nulla. Enim lobortis scelerisque fermentum dui faucibus in ornare quam.
        Turpis massa sed elementum tempus egestas sed. Nec tincidunt praesent
        semper feugiat nibh sed pulvinar proin. Pellentesque habitant morbi
        tristique senectus et netus et malesuada. Porttitor lacus luctus
        accumsan tortor posuere ac ut. Rhoncus aenean vel elit scelerisque
        mauris pellentesque. Non sodales neque sodales ut etiam. Id venenatis a
        condimentum vitae sapien pellentesque habitant morbi. Porttitor leo a
        diam sollicitudin. Commodo elit at imperdiet dui accumsan sit amet
        nulla. Consequat ac felis donec et odio pellentesque diam volutpat.
        Egestas dui id ornare arcu. Faucibus in ornare quam viverra orci
        sagittis. Faucibus pulvinar elementum integer enim neque volutpat.
        Luctus accumsan tortor posuere ac ut. Mollis aliquam ut porttitor leo a
        diam sollicitudin tempor. Enim eu turpis egestas pretium aenean pharetra
        magna ac. Sollicitudin aliquam ultrices sagittis orci a scelerisque
        purus semper eget. Neque gravida in fermentum et sollicitudin ac orci
        phasellus. Netus et malesuada fames ac turpis egestas. Nulla facilisi
        morbi tempus iaculis urna id volutpat. Platea dictumst quisque sagittis
        purus sit amet volutpat. Et ligula ullamcorper malesuada proin libero
        nunc consequat interdum. Purus sit amet luctus venenatis lectus magna.
        Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.
        Bibendum est ultricies integer quis auctor elit sed. Placerat in egestas
        erat imperdiet sed. Eu augue ut lectus arcu bibendum at varius vel.
        Tortor aliquam nulla facilisi cras fermentum odio. Urna cursus eget nunc
        scelerisque viverra mauris. Ultricies mi eget mauris pharetra et
        ultrices neque ornare. Tellus orci ac auctor augue mauris augue neque
        gravida in. Duis ut diam quam nulla porttitor massa. Quisque non tellus
        orci ac auctor augue. Nam at lectus urna duis convallis convallis tellus
        id interdum. Congue quisque egestas diam in. Turpis egestas maecenas
        pharetra convallis. Nulla posuere sollicitudin aliquam ultrices sagittis
        orci a scelerisque. Mattis molestie a iaculis at. Convallis a cras
        semper auctor neque. Pellentesque diam volutpat commodo sed egestas
        egestas. Accumsan tortor posuere ac ut consequat semper viverra nam
        libero. Penatibus et magnis dis parturient montes nascetur. Tempus
        iaculis urna id volutpat lacus. Auctor elit sed vulputate mi sit. Nam
        libero justo laoreet sit amet cursus sit. Sed cras ornare arcu dui
        vivamus arcu felis bibendum. Dignissim diam quis enim lobortis
        scelerisque fermentum dui. Quis commodo odio aenean sed adipiscing diam
        donec adipiscing. Libero justo laoreet sit amet cursus sit amet. Sit
        amet facilisis magna etiam tempor orci eu. Nec nam aliquam sem et tortor
        consequat id porta nibh. Amet est placerat in egestas. Non arcu risus
        quis varius quam quisque. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue. Cursus mattis molestie a iaculis. Amet nulla
        facilisi morbi tempus. Lacus sed viverra tellus in hac. Urna porttitor
        rhoncus dolor purus non enim praesent. Purus sit amet luctus venenatis
        lectus. Id nibh tortor id aliquet lectus proin nibh nisl. Amet justo
        donec enim diam vulputate. Tristique senectus et netus et malesuada
        fames ac turpis. In tellus integer feugiat scelerisque varius morbi enim
        nunc. At urna condimentum mattis pellentesque. Et ultrices neque ornare
        aenean euismod elementum nisi. Nisl vel pretium lectus quam id leo in.
        Iaculis eu non diam phasellus vestibulum. Egestas purus viverra accumsan
        in nisl nisi. Mi sit amet mauris commodo. Hac habitasse platea dictumst
        quisque sagittis. Cursus metus aliquam eleifend mi. In vitae turpis
        massa sed elementum tempus egestas. Dictum at tempor commodo ullamcorper
        a lacus vestibulum sed. Sed ullamcorper morbi tincidunt ornare massa
        eget egestas purus viverra. Placerat orci nulla pellentesque dignissim.
        Enim tortor at auctor urna. Suspendisse sed nisi lacus sed viverra.
        Fermentum posuere urna nec tincidunt praesent semper feugiat. Adipiscing
        enim eu turpis egestas pretium aenean pharetra. A scelerisque purus
        semper eget duis at tellus at urna. Vitae proin sagittis nisl rhoncus
        mattis rhoncus. Suspendisse sed nisi lacus sed viverra. Placerat
        vestibulum lectus mauris ultrices eros. Ultricies leo integer malesuada
        nunc vel risus. Ac auctor augue mauris augue neque gravida in. Gravida
        quis blandit turpis cursus in hac. Amet justo donec enim diam vulputate
        ut pharetra. Vestibulum mattis ullamcorper velit sed ullamcorper morbi.
        Turpis egestas maecenas pharetra convallis. Netus et malesuada fames ac.
        Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
        Tellus in metus vulputate eu scelerisque felis imperdiet. Semper auctor
        neque vitae tempus quam pellentesque. Phasellus vestibulum lorem sed
        risus ultricies tristique nulla aliquet. Vestibulum sed arcu non odio
        euismod lacinia at quis. Lorem donec massa sapien faucibus et molestie
        ac feugiat. Faucibus et molestie ac feugiat sed. Malesuada pellentesque
        elit eget gravida cum sociis. Pellentesque elit eget gravida cum sociis
        natoque penatibus et magnis. Tortor id aliquet lectus proin nibh nisl
        condimentum id venenatis. Sed vulputate odio ut enim blandit volutpat
        maecenas volutpat blandit. Quis blandit turpis cursus in hac habitasse
        platea dictumst quisque. Ultricies mi quis hendrerit dolor magna eget
        est. Pellentesque pulvinar pellentesque habitant morbi tristique
        senectus et netus. Non nisi est sit amet facilisis magna etiam. Diam
        vulputate ut pharetra sit amet aliquam id diam maecenas. Sed arcu non
        odio euismod lacinia at. Venenatis tellus in metus vulputate eu
        scelerisque felis imperdiet proin. Sed vulputate odio ut enim blandit
        volutpat maecenas volutpat blandit. Accumsan sit amet nulla facilisi
        morbi tempus iaculis urna. Dolor morbi non arcu risus quis varius quam.
        Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Nisi est
        sit amet facilisis magna etiam tempor orci eu. Hendrerit dolor magna
        eget est. Urna neque viverra justo nec ultrices dui sapien eget mi.
        Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Tellus
        cras adipiscing enim eu turpis egestas pretium. Non enim praesent
        elementum facilisis leo. At imperdiet dui accumsan sit amet. Arcu risus
        quis varius quam quisque. Ultricies mi eget mauris pharetra et ultrices
        neque ornare aenean. Sed tempus urna et pharetra pharetra. Congue eu
        consequat ac felis. Odio ut enim blandit volutpat maecenas. Nunc sed
        blandit libero volutpat sed cras ornare arcu dui. Donec ac odio tempor
        orci dapibus ultrices in. Accumsan lacus vel facilisis volutpat est
        velit egestas. Nulla facilisi cras fermentum odio eu feugiat pretium
        nibh ipsum. Auctor neque vitae tempus quam pellentesque nec nam aliquam
        sem. Lectus magna fringilla urna porttitor rhoncus dolor purus. At in
        tellus integer feugiat scelerisque. Aliquam purus sit amet luctus
        venenatis lectus. Pulvinar proin gravida hendrerit lectus a. Non tellus
        orci ac auctor augue. Magna sit amet purus gravida quis blandit turpis
        cursus in. Bibendum neque egestas congue quisque egestas diam in.
        Elementum sagittis vitae et leo. Lacus luctus accumsan tortor posuere ac
        ut consequat semper. Eu volutpat odio facilisis mauris sit amet. Purus
        faucibus ornare suspendisse sed. Justo nec ultrices dui sapien eget mi.
        Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed.
        Vestibulum lectus mauris ultrices eros in. Neque vitae tempus quam
        pellentesque nec nam. Sagittis nisl rhoncus mattis rhoncus. Lorem ipsum
        dolor sit amet consectetur adipiscing elit. Erat velit scelerisque in
        dictum non consectetur a erat nam. Sit amet risus nullam eget felis eget
        nunc lobortis. Sit amet justo donec enim diam. Ut morbi tincidunt augue
        interdum. Eget est lorem ipsum dolor sit amet. Placerat vestibulum
        lectus mauris ultrices eros in cursus turpis massa. Et tortor at risus
        viverra adipiscing at in tellus integer. Morbi leo urna molestie at
        elementum eu. Libero volutpat sed cras ornare. Vestibulum lectus mauris
        ultrices eros in cursus. Egestas maecenas pharetra convallis posuere.
        Turpis massa sed elementum tempus egestas sed sed risus. In ornare quam
        viverra orci. Sit amet venenatis urna cursus eget nunc scelerisque.
        Pellentesque habitant morbi tristique senectus et netus. Mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue
        mauris rhoncus aenean vel elit. Nec ultrices dui sapien eget. Sed risus
        ultricies tristique nulla aliquet enim tortor at. Odio ut sem nulla
        pharetra diam sit. Sed lectus vestibulum mattis ullamcorper. At tellus
        at urna condimentum mattis. Consequat ac felis donec et odio
        pellentesque. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
        vivamus. Amet aliquam id diam maecenas ultricies mi. Amet consectetur
        adipiscing elit duis tristique sollicitudin. Morbi tempus iaculis urna
        id. Nunc sed blandit libero volutpat. Nullam ac tortor vitae purus
        faucibus ornare suspendisse sed nisi. Porta lorem mollis aliquam ut
        porttitor leo. Ullamcorper eget nulla facilisi etiam. Est pellentesque
        elit ullamcorper dignissim cras tincidunt lobortis. Amet dictum sit amet
        justo donec enim. Convallis convallis tellus id interdum velit laoreet.
        Adipiscing vitae proin sagittis nisl rhoncus mattis. Penatibus et magnis
        dis parturient montes nascetur. Turpis massa tincidunt dui ut ornare
        lectus sit. Pellentesque eu tincidunt tortor aliquam nulla facilisi
        cras. In cursus turpis massa tincidunt dui ut ornare. Id porta nibh
        venenatis cras sed. Dui ut ornare lectus sit. Mi in nulla posuere
        sollicitudin aliquam ultrices. At lectus urna duis convallis convallis
        tellus id. Odio pellentesque diam volutpat commodo sed. A lacus
        vestibulum sed arcu non odio euismod lacinia at. Ut placerat orci nulla
        pellentesque dignissim enim. Vestibulum lectus mauris ultrices eros in.
        Adipiscing commodo elit at imperdiet. Dictum at tempor commodo
        ullamcorper a lacus. Ipsum dolor sit amet consectetur. Ut morbi
        tincidunt augue interdum. Volutpat est velit egestas dui id ornare. Eget
        velit aliquet sagittis id consectetur purus ut. Vivamus at augue eget
        arcu dictum varius duis at. Eget duis at tellus at urna condimentum
        mattis.
      </div>
      <MessengerCustomerChat pageId="116543563511206" appId="667569657298462" minimized={false} shouldShowDialog={true}/>
    </>
  );
}

export default App;
