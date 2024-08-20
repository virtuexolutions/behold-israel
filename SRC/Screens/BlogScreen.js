import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../Components/Header';
import BlogComponent from '../Components/BlogComponent';

const BlogScreen = () => {
  const BlogData = [
    {
      id: 1,
      image: require('../Assets/Images/b6.png'),
      mainHeading:
        'The Sacred Mystery of the Eucharist: Exploring Its Meaning and Reverence',
      intro:
        'Introduction: The Eucharist, also known as Holy Communion, stands as the pinnacle of Catholic worship, embodying the profound mystery of Christ’s presence in the consecrated bread and wine. From ancient traditions to contemporary celebrations, the Eucharist holds a central place in Christian faith and practice. In this exploration of the Eucharist, we delve into its significance, miracles, and the revival of devotion through Eucharistic congresses and adoration.',
      heading1: ' Understanding the Eucharist:',
      text: 'The Eucharist is the sacrament in which Catholics partake of the body and blood of Jesus Christ, under the appearances of bread and wine.It is considered the source and summit of the Christian life, representing Christ’s sacrificial love and offering of himself for the salvation of humanity.',
      heading2: 'Eucharistic Miracles:',
      text2:
        'Eucharistic miracles are extraordinary events where the consecrated elements of bread and wine undergo physical changes or manifestations, affirming the real presence of Christ.These miracles serve as powerful testimonies to the faith and reverence surrounding the Eucharist, strengthening believers’ devotion and awe.',
      heading3: 'Holy Eucharist:',
      text3:
        'The Holy Eucharist refers to the consecrated bread and wine that Catholics believe to be the body and blood of Christ.It is received by worshippers during Mass as a means of spiritual nourishment and communion with God.',
      heading4: 'Eucharistic Prayer:',
      text4:
        'Eucharistic prayers are the central prayers of the Mass, recited by the priest to consecrate the bread and wine into the body and blood of Christ.These prayers invoke the Holy Spirit and commemorate Christ’s sacrifice on the cross, making present the saving power of his death and resurrection.',
      heading5: 'National Eucharistic Revival:',
      text5:
        'The National Eucharistic Revival is a movement within the Catholic Church aimed at renewing devotion to the Eucharist and promoting greater reverence and understanding among believers.Through initiatives such as Eucharistic congresses, retreats, and education programs, the revival seeks to deepen believers’ appreciation for the Eucharist as the source of spiritual life.',
      heading6: 'Eucharist Holy Communion:',
      text6:
        'Eucharist Holy Communion is the act of receiving the consecrated bread and wine during Mass, signifying unity with Christ and fellow believers.It is a sacred moment of encounter with the living presence of Christ and a participation in his saving grace.',
      heading7: 'Eucharistic Congress 2024:',
      text7:
        'The Eucharistic Congress 2024 is a global gathering of Catholics to celebrate and deepen their understanding of the Eucharist.The congress features Masses, talks, adoration, and other spiritual activities aimed at fostering greater devotion to the Eucharist and its transformative power.',
      heading8: 'Eucharistic Adoration Prayers:',
      text8:
        'Eucharistic adoration prayers are prayers of reverence and devotion offered to the Blessed Sacrament during periods of adoration.These prayers express adoration, thanksgiving, contrition, and supplication before the real presence of Christ in the Eucharist.',
      heading9: 'Eucharistic Adoration Near Me:',
      text9:
        'Finding Eucharistic adoration near you is made easier through parish schedules, online directories, and dedicated adoration chapels.Eucharistic adoration offers worshippers the opportunity for silent prayer, reflection, and contemplation in the presence of the Blessed Sacrament.',
      heading10: 'Holy Eucharist Church:',
      text10:
        'Holy Eucharist Church is a place of worship where Catholics gather to celebrate Mass and receive the Eucharist.These churches often emphasize the centrality of the Eucharist in their liturgical and spiritual life, fostering devotion and reverence among parishioners.',
      heading11: 'Conclusion:',
      text11:
        'The Eucharist stands as the sacred heart of Catholic worship, embodying the mystery of Christ’s presence and the transformative power of his sacrifice. As believers partake of the Eucharist, they enter into communion with God and one another, uniting in faith, love, and devotion. Through Eucharistic miracles, prayers, congresses, and adoration, Catholics continue to deepen their appreciation for this holy sacrament, finding in it the source of spiritual nourishment, healing, and grace. May the reverence and awe inspired by the Eucharist lead believers to a deeper encounter with the living presence of Christ and a renewed commitment to lives of faith and service.',
    },
    {
      id: 2,
      image: require('../Assets/Images/b5.png'),
      mainHeading:
        'The Sacred Tradition of Holy Mass: Exploring Its Significance and Practice',
      intro:
        'Introduction: Holy Mass stands as the cornerstone of Catholic worship, embodying the sacred tradition of commemorating Christ’s sacrifice and experiencing the real presence of the Eucharist. From the ancient rituals to modern-day celebrations, Holy Mass serves as a spiritual centerpiece for believers worldwide. In this exploration of Holy Mass, we delve into its various aspects, from its significance in Catholic theology to practical considerations such as Mass times and readings.',
      heading1: 'Understanding Holy Mass:',
      text: 'Holy Mass, also known as the Eucharist or Divine Liturgy, is the central act of Christian worship in the Catholic tradition.It commemorates Jesus Christ’s Last Supper with his disciples, where he instituted the sacrament of the Eucharist.',
      heading2: 'Holy Mass Today:',
      text2:
        'Today, Holy Mass continues to be celebrated in churches around the world, drawing believers together in communal worship and spiritual communion.Despite challenges such as secularization and dwindling attendance, Holy Mass remains a vital aspect of Catholic life and identity.',
      heading3: 'Holy Family Mass Times:',
      text3:
        'Holy Family Mass times vary depending on the parish and location, offering flexibility for worshippers to attend Mass according to their schedules.Parishes often provide multiple Mass times throughout the week, including special Masses for holy days and holidays.',
      heading4: 'Daily Holy Mass:',
      text4:
        'Daily Holy Mass provides believers with the opportunity for regular spiritual nourishment and communion with God.Attending daily Mass fosters a deeper relationship with Christ and strengthens one’s faith through the reception of the Eucharist.',
      heading5: 'Holy Mass Near Me:',
      text5:
        'Finding a Holy Mass near you is made easier with online directories and parish websites that list Mass times and locations.Whether traveling or seeking a new place of worship, knowing where to find Holy Mass ensures continuity in one’s spiritual practice.',
      heading6: 'Mass Time Holy Spirit:',
      text6:
        'Mass Time Holy Spirit refers to the moment during Holy Mass when the priest invokes the Holy Spirit to sanctify the bread and wine, transforming them into the body and blood of Christ.This sacred moment underscores the belief in the real presence of Christ in the Eucharist.',
      heading7: 'Prayer Before Holy Mass:',
      text7:
        'Prayer before Holy Mass prepares the heart and mind for worship, inviting God’s presence into the sacred space of the liturgy.Traditional prayers such as the Act of Contrition or the Prayer of St. Thomas Aquinas help center worshippers on the mystery of the Eucharist.',
      heading8: 'Holy Name of Jesus Church Mass Times:',
      text8:
        'Holy Name of Jesus Church offers Mass times for worshippers to participate in the Eucharistic celebration and receive the sacraments.Parishioners can check the church bulletin or website for updated Mass schedules and special events.',
      heading9: 'Holy Family Christmas Mass:',
      text9:
        'Holy Family Christmas Mass is a cherished tradition for many Catholic families, commemorating the birth of Jesus Christ.Masses held on Christmas Eve and Christmas Day feature special liturgies, music, and decorations to celebrate the joyous occasion.',
      heading10: 'Daily Holy Mass Readings:',
      text10:
        'Daily Holy Mass readings follow a liturgical calendar that cycles through scripture passages over the course of the year.These readings provide worshippers with a systematic way to engage with the Bible and reflect on its teachings in the context of the Mass.',
      heading11: 'Conclusion:',
      text11:
        'Holy Mass stands as a sacred and timeless tradition that unites Catholics in worship, prayer, and communion with Christ. As believers gather to celebrate the Eucharist, they are reminded of Christ’s sacrifice, his real presence in the sacrament, and the promise of salvation. Whether attending daily Mass or participating in special liturgies, the practice of Holy Mass remains a vital expression of faith and devotion for Catholics around the world.',
    },
    {
      id: 3,
      image: require('../Assets/Images/b4.png'),
      mainHeading:
        'Exploring the Power of Miracles in Christian Faith: A Comprehensive Guide',
      intro:
        'Miracles have always held a profound significance in Christian theology, serving as divine interventions that defy natural laws and showcase the power of God. From biblical accounts of Jesus performing miraculous healings to modern-day testimonies of unexplained phenomena, miracles continue to captivate the hearts and minds of believers worldwide. In this comprehensive guide, we delve deep into the concept of miracles in Christianity, exploring their various forms, significance, and enduring impact on faith.',
      heading1: 'The Meaning of Miracles:',
      text: 'Miracles are defined as extraordinary events that are perceived to be the result of divine intervention, surpassing the natural order of the universe.The concept of miracles is deeply rooted in Christian doctrine, with numerous references found throughout the Bible, particularly in the New Testament.',
      heading2: 'Miracles from Heaven:',
      text2:
        'The term “Miracles from Heaven” refers to supernatural occurrences that are believed to originate from the divine realm, bringing about blessings and divine favor.Examples of Miracles from Heaven can include miraculous healings, divine interventions in times of crisis, and instances of providential protection.',
      heading3: 'Miracle Grow:',
      text3:
        'Miracle Grow is a metaphorical concept that symbolizes spiritual growth and transformation in the Christian faith.It represents the idea that through faith, prayer, and divine grace, individuals can experience exponential growth and development in their spiritual journey.',
      heading4: 'Christian Miracles Today:',
      text4:
        'Despite the skepticism of modern society, reports of Christian miracles continue to surface, offering hope and inspiration to believers.These contemporary miracles range from miraculous healings and unexplained recoveries to encounters with angelic beings and divine manifestations.',
      heading5: 'Christian Prayers for Miracles:',
      text5:
        'Prayer is a powerful tool in the Christian faith, serving as a direct line of communication with God.Christians often pray fervently for miracles, seeking divine intervention in times of need, illness, or crisis.',
      heading6: 'Christian Miracle Stories:',
      text6:
        'Throughout history, countless stories of miraculous occurrences have been documented, serving as testimonies to the power and faithfulness of God.These miracle stories range from personal accounts of divine healing and provision to miraculous interventions in the face of insurmountable odds.',
      heading7: 'Christian Quotes about Miracles:',
      text7:
        'Christian literature is replete with quotes and passages that celebrate the miraculous works of God.These quotes serve to inspire, encourage, and reaffirm believers’ faith in the possibility of miracles in their own lives.',
      heading8: 'Miracle Christian Church:',
      text8:
        'The Miracle Christian Church is a community of believers who place a strong emphasis on the supernatural power of God and the manifestation of miracles in their midst.These churches often prioritize prayer, faith, and spiritual gifts in their worship and ministry.',
      heading9: 'Miracles of Jesus:',
      text9:
        'The miracles performed by Jesus during his earthly ministry are among the most well-known and revered in Christian theology.From turning water into wine to raising the dead, Jesus’ miracles serve as compelling evidence of his divinity and messianic mission.',
      heading10: 'Conclusion:',
      text10:
        'Miracles hold a central place in Christian faith and theology, serving as tangible manifestations of God’s power, love, and sovereignty. Whether found in the pages of scripture or witnessed in contemporary times, miracles continue to inspire awe and wonder, strengthening the faith of believers and inviting skeptics to reconsider their worldview. As we reflect on the myriad expressions of divine intervention and supernatural encounters, may we be reminded of the enduring truth that with God, all things are possible, and miracles are indeed a testament to His unfailing grace and mercy.',
    },
    {
      id: 4,
      image: require('../Assets/Images/b1.png'),
      mainHeading:
        'Unveiling the Mystery of Exorcism: Understanding its Significance and Practice',
      intro:
        'Exorcism, an ancient ritual rooted in spiritual warfare, continues to captivate and intrigue believers and skeptics alike. From Hollywood depictions to real-life accounts, the practice of exorcism raises questions about the nature of evil, the power of faith, and the unseen forces that shape our world. In this exploration of exorcism, we delve into its meaning, its practice within religious traditions, and the search for truth behind the veil of darkness.',
      heading1: 'Understanding Exorcism:',
      text: 'Exorcism is a ritualistic practice performed to expel demonic entities or evil spirits from individuals or places believed to be possessed.It is rooted in religious belief systems that acknowledge the existence of spiritual forces and the power of divine intervention.',
      heading2: 'The Exorcism of God:',
      text2:
        'The concept of “The Exorcism of God” is a theological paradox that explores the idea of God casting out evil from the world.It reflects the belief in God’s sovereignty over all creation and the ultimate triumph of good over evil.',
      heading3: 'Exorcism Meaning:',
      text3:
        'The meaning of exorcism varies across religious traditions but generally involves the ritualistic expulsion of demonic forces or evil spirits.It is often performed by religious authorities or trained practitioners using prayers, sacred objects, and rituals of purification.',
      heading4: 'Exorcism Prayer:',
      text4:
        'Exorcism prayers are sacred invocations used to command evil spirits to depart from individuals or places.These prayers often invoke the name of God, Jesus Christ, or other divine figures, calling upon their power to banish darkness and restore spiritual health.',
      heading5: 'Real Exorcism:',
      text5:
        'Real exorcism refers to documented cases of exorcisms performed by religious authorities or trained practitioners.These cases often involve individuals exhibiting signs of possession, such as altered behavior, supernatural strength, or aversion to sacred objects.',
      heading6: 'Exorcism Near Me:',
      text6:
        'Finding exorcism services near you is uncommon, as exorcisms are typically performed by trained clergy or specialists within religious institutions.Individuals seeking spiritual assistance for suspected cases of possession are encouraged to consult with their local religious leaders or seek guidance from reputable sources.',
      heading7: 'Exorcism Based on True Story:',
      text7:
        'Exorcism based on true stories refers to documented cases of exorcisms that have been verified by credible witnesses or sources.These accounts often provide insight into the nature of possession and the efficacy of exorcism rituals in confronting spiritual evil.',
      heading8: 'How to Perform an Exorcism Prayer:',
      text8:
        'Performing an exorcism prayer requires proper training, spiritual discernment, and adherence to established protocols within religious traditions.Only authorized clergy or trained practitioners should attempt exorcism prayers, as they involve confronting spiritual forces that can be dangerous if mishandled.',
      heading9: 'Self Exorcism Prayer:',
      text9:
        'Self-exorcism prayers are prayers of deliverance and protection recited by individuals seeking to rid themselves of spiritual oppression or influence.While self-exorcism prayers can be a source of comfort and spiritual support, individuals facing severe cases of possession or oppression are advised to seek assistance from trained professionals.',
      heading10: 'Exorcism of God:',
      text10:
        'The concept of the “Exorcism of God” challenges traditional notions of divine omnipotence and the problem of evil.It prompts theological reflection on the nature of evil, suffering, and the role of humanity in confronting spiritual darkness.',
      heading11: 'Conclusion:',
      text11:
        'Exorcism remains a mysterious and controversial practice that continues to fascinate and perplex believers and scholars alike. As we seek to understand its significance and practice, may we approach the subject with humility, discernment, and reverence for the spiritual realities at play. Whether viewed through the lens of religious tradition or explored through the lens of human experience, exorcism invites us to confront the mysteries of evil and the enduring power of faith in the battle for the human soul.',
    },
    {
      id: 5,
      image: require('../Assets/Images/b3.png'),
      mainHeading:
        'The Benediction in Christian Worship: A Symbol of Blessing and Grace',
      intro:
        'The Benediction holds a special place in Christian worship, serving as a sacred moment of blessing and divine favor bestowed upon congregants. Rooted in ancient tradition and steeped in spiritual significance, the Benediction carries profound meaning for believers across denominations. In this exploration of the Benediction, we delve into its various forms, its role in Christian worship, and its enduring relevance in contemporary practice.',
      heading1: 'Understanding the Benediction:',
      text: 'The Benediction is a ritualized prayer or blessing pronounced by clergy or leaders at the conclusion of a worship service.It invokes God’s grace, peace, and protection upon the congregation, sending worshippers forth with a sense of divine favor and empowerment.',
      heading2: 'The Benedict Society:',
      text2:
        'The Benedict Society is a Christian organization or community dedicated to embodying the principles and values espoused by Saint Benedict of Nursia, a renowned Christian monk and founder of the Benedictine Order.Members of the Benedict Society strive to live lives of prayer, hospitality, and service, following the Benedictine Rule as a guide for spiritual growth and communal living.',
      heading3: 'Christian Benedictions:',
      text3:
        'Christian Benedictions are prayers or blessings offered in Christian worship settings, often based on scriptural passages or traditional liturgical texts.They serve as a means of invoking God’s blessing and grace upon worshippers, affirming their faith and commitment to Christ.',
      heading4: 'Christian Benediction Prayer:',
      text4:
        'The Christian Benediction Prayer is a spoken or sung invocation of God’s blessing and favor upon the congregation at the conclusion of a worship service.It typically includes words of encouragement, peace, and assurance, reminding worshippers of God’s presence and care in their lives.',
      heading5: 'Benedict Christianity:',
      text5:
        'Benedict Christianity refers to the spiritual ethos and practices inspired by the teachings of Saint Benedict of Nursia and the Benedictine monastic tradition.It emphasizes values such as humility, obedience, stability, and prayer as essential components of the Christian life.',
      heading6: 'Corpus Christi Benediction:',
      text6:
        'The Corpus Christi Benediction is a special form of the Benediction that is often associated with the feast of Corpus Christi, commemorating the Eucharist and Christ’s real presence in the sacrament.It includes adoration of the Blessed Sacrament and prayers for spiritual renewal and devotion.',
      heading7: 'Benedictions for Christian Worship:',
      text7:
        'Benedictions for Christian worship encompass a variety of prayers, blessings, and liturgical formulas used to conclude worship services.These benedictions may vary in form and content but share the common purpose of invoking God’s blessing and sending worshippers forth with renewed faith and purpose.',
      heading8: 'Benedict Option in Christianity Today:',
      text8:
        'The Benedict Option is a concept proposed by author Rod Dreher, advocating for a strategic withdrawal of Christians from secular culture and a recommitment to traditional Christian values and practices. It draws inspiration from the Benedictine tradition and calls for intentional community-building, spiritual formation, and cultural engagement among believers.',
      heading9: 'The Christian Benediction:',
      text9:
        'The Christian Benediction is a sacred moment of closure and blessing in Christian worship, symbolizing God’s presence and guidance in the lives of believers.It serves as a reminder of God’s faithfulness, grace, and love, empowering worshippers to go forth with renewed faith and confidence.',
      heading10: 'Conclusion:',
      text11:
        'The Benediction holds a cherished place in Christian worship, embodying the timeless tradition of invoking God’s blessing and favor upon the faithful. Whether spoken by clergy, sung by choirs, or shared by fellow worshippers, the Benediction serves as a tangible expression of God’s presence and care in the lives of believers. As we embrace the Benediction in our worship and spiritual practice, may we be reminded of God’s unfailing love and grace, guiding us on our journey of faith and discipleship.',
    },
    {
      id: 6,
      image: require('../Assets/Images/b2.png'),
      mainHeading:
        'The Sacrament of Confession: A Path to Spiritual Renewal and Healing',
      intro:
        'Confession, also known as the Sacrament of Reconciliation, holds a central place in the Catholic faith, offering believers a profound opportunity for spiritual renewal, healing, and reconciliation with God. From the ancient traditions of the early Church to contemporary practices, Confession remains a cornerstone of Catholic spirituality. In this exploration of Confession, we delve into its significance, its practice within the Catholic Church, and the availability of Confession near worshippers.',
      heading1: 'Understanding Confession:',
      text: 'Confession is a sacramental ritual in which Catholics confess their sins to a priest, express contrition, and receive absolution.It is based on the belief in the forgiveness of sins through the ministry of the Church and the authority granted to priests by Christ.',
      heading2: 'Confession Near Me:',
      text2:
        'Finding Confession near you is made easier through online directories, parish websites, and mobile apps that list Confession times and locations.Many Catholic churches offer regular Confession hours or by appointment, providing worshippers with convenient access to this sacrament of grace.',
      heading3: 'Catholic Confession:',
      text3:
        'Catholic Confession follows the prescribed form of the sacrament as outlined by the Church, including contrition, confession of sins, and satisfaction.It is a sacramental encounter with Christ, who forgives sins through the ministry of the priest acting in persona Christi.',
      heading4: 'The Confession:',
      text4:
        'The Confession refers to the act of confessing one’s sins to a priest in the Sacrament of Reconciliation.It involves sincere contrition, an honest acknowledgment of wrongdoing, and a commitment to amend one’s life.',
      heading5: 'Catholic Church Confession:',
      text5:
        'Confession is a regular practice within the Catholic Church, reflecting the Church’s belief in the importance of repentance, forgiveness, and reconciliation.Catholics are encouraged to receive the sacrament of Confession regularly as a means of spiritual growth and healing.',
      heading6: 'Catholic Churches with Confession Near Me:',
      text6:
        'Many Catholic churches offer Confession as part of their regular liturgical and pastoral ministry.Worshippers can inquire about Confession times and availability at their local parish or search online for nearby Catholic churches offering the sacrament.',
      heading7: 'Catholic Church Confession Prayer:',
      text7:
        'The Catholic Church Confession Prayer is a prayer of contrition and repentance recited by the penitent during the Sacrament of Reconciliation.It expresses sorrow for sin, a desire for forgiveness, and a commitment to amend one’s life in accordance with the teachings of Christ.',
      heading8: 'Church Confession:',
      text8:
        'Church Confession refers to the sacramental practice of confessing sins to a priest within the context of the Church’s liturgy and pastoral care.It is a sacred encounter with God’s mercy and grace, offering believers the opportunity for spiritual healing and renewal.',
      heading9: 'Church Confession Near Me:',
      text9:
        'Church Confession near you is available at many Catholic churches, providing worshippers with the opportunity to receive the sacrament of Reconciliation in their local community.Worshippers can check parish websites or contact their local church for Confession times and availability.',
      heading10: 'Confessions at Church:',
      text10:
        'Confessions at Church are typically held in designated confessionals or private rooms where penitents can confess their sins to a priest in a confidential setting.These Confession times are often scheduled regularly throughout the week, allowing worshippers to participate in this sacramental encounter with God’s mercy.',
      heading11: 'Conclusion:',
      text11:
        'Confession stands as a sacred sacrament of healing and reconciliation within the Catholic Church, offering believers the opportunity to experience God’s forgiveness and grace in a tangible way. As Catholics avail themselves of Confession near them, may they be renewed in their faith, strengthened in their resolve to live virtuous lives, and reconciled with God and their neighbor. Let us embrace Confession as a gift of divine mercy and a pathway to spiritual renewal and healing in our lives.',
    },
  ];

  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
      }}
      source={require('../Assets/Images/setting_Bg.png')}>
      <Header
        showLeft={true}
        leftName={'menu'}
        leftType={Feather}
        title={'Blog'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: moderateScale(10, 0.6),
        }}
        contentContainerStyle={{
          paddingBottom: moderateScale(150, 0.3),
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal :moderateScale(19,.3),
            paddingBottom: moderateScale(50, 0.3),
          }}
          data={BlogData}
          keyExtractor={item => item?.id}
          renderItem={(item, index) => {
            return <BlogComponent item={item?.item} />;
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({});
