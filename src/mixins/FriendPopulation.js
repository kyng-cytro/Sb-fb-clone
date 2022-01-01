import Friend from "@/vuex-orm_models/FriendModel.js";

export const FriendPopulation = {
  data() {
    return {
      // friendExampleList: [
      //   {
      //     imageSource: "businessMan.jpg",
      //     name: "Miles",
      //     numOfMutualFriends: 21,
      //   },
      //   {
      //     imageSource: "anson.jpg",
      //     name: "Anson",
      //     numOfMutualFriends: 21,
      //   },
      //   {
      //     imageSource: "xinru.jpg",
      //     name: "Xinru",
      //     numOfMutualFriends: 21,
      //   },
      // ]
    };
  },
  methods: {
    addFriend(friend) {
      Friend.insert({ data: friend });
    },
    addFriends(friends) {
      Friend.insert({ data: friends });
    },
    selectOrDeselectAllFriends(select) {
      //select is true if you want to select them all, false otherwise
      let numberOfFriends = this.friends.length;
      for (let i = 0; i < numberOfFriends; i++) {
        Friend.update({
          where: this.friends[i].id,
          data: {
            selected: select,
          },
        });
      }
    },
  },
  computed: {
    friends() {
      return Friend.all();
    },
    friendsTestData() {
      return [
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/247875056_10228000591419068_2893029669512954250_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=FMtaQzPTxMEAX-OAcQV&_nc_ht=scontent.fapa1-1.fna&oh=00_AT_jKzIB9Su4t0Qs2ilkOPoX8K26ZS7KH3Wlq-ASTCsMIQ&oe=61D31C96",
          name: "Kirsten Seable Savage",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/257968012_300499361939155_6265685233825293505_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=OfSGzPFosygAX-Qoolw&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_xcpmpQ7uRI0b2-zapiMfI1XOnTADRs6criuYY_YGJ2g&oe=61D24601",
          name: "Levi Savage",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/265816727_1492046604485211_8034974351178354874_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=L6dUXI5AHIEAX82O_72&_nc_ht=scontent.fapa1-2.fna&oh=00_AT9_uWE0sgDDXbxTN94icd_56L9j-TErEwxta5-WkPM5PQ&oe=61D3B96C",
          name: "Tyson Seable",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/89722032_1843490132448940_1878541995744428032_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=uCIWsIWXciQAX-vVb3w&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_5jSi1oyuqVAYD4jhElPg9km9xAxF7f8Yeq6p5shVM1w&oe=61F5574F",
          name: "Gabriel Schaffer",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/196332653_2850749908474195_46359218987821929_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=HlVENMJogWAAX_wjLsn&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9SQguZOJxAVndrLq8L2eC3RQ0ggAThzhq5RGWrKUkwig&oe=61F4A130",
          name: "Julie Jarvis",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/241758194_1215022855672537_5535859039992998935_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=87-JHhAVaD4AX_uX89O&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_voL8A0kQjmpglr9xEO7v3imzxHZX0FyAFxwIhutmCZA&oe=61D329A9",
          name: "Nathan Dickson",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/c13.0.80.80a/p80x80/96600404_2736465009916669_8612649114955415552_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=GZC4cjbY7i4AX9en02A&_nc_ht=scontent.fapa1-1.fna&oh=00_AT-lEcpixM3EWSUvyl6Tj1Z-_G1EHmRVwaCO6TjZP7kJhg&oe=61F56C7F",
          name: "Nathan Schaffer",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-1/cp0/c0.0.80.80a/p80x80/264774246_1537980219906137_7806038882507764327_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=Whc-JZE7RN8AX9bFhfF&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-ySwXgYE14xtzhwq3YCdlsNgoMqf8g8kalhUpvv1rwhg&oe=61D3E29A",
          name: "Charlie Jarvis",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/79739365_10162894927725014_1920103311936061440_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=x5CNm_ZCmP4AX9oF6fy&tn=blbHk5TA-fbyyr3W&_nc_ht=scontent.fapa1-1.fna&oh=00_AT-D5QLuKWaaCpnHSWkHxw3TBuIJglJ81ACDGUez3-8MIQ&oe=61F4AA01",
          name: "Stephan Kathleen Seable",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/224659894_748090066590505_6316501293643342359_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=D3XlpgokEz0AX_qIuTk&_nc_ht=scontent.fapa1-1.fna&oh=00_AT98UASEel6_IHo6nIVI08043xljQn0j28pUDYH_47l4vw&oe=61D28334",
          name: "Jorgen Goodman",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t31.18172-1/cp0/p80x80/19679300_10213199285798393_6277315301181969345_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=mBSwfVj3JQkAX_sEbwS&_nc_ht=scontent.fapa1-2.fna&oh=00_AT9PSnf8tg65VHIA6gWbVfG9AHiETc-7dwx4SvsPK_U0pA&oe=61F38392",
          name: "Clark Schaffer",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/240655896_377836963965246_2357209000686172871_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=gvCjrn2tjDkAX_OpUq2&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-d6peFQ6bjc0Gmf0K8IctBkOBkaCKFGnCetAJAprUrTw&oe=61D350A7",
          name: "Adam Oligschlaeger",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/c31.57.80.80a/p120x120/249190417_464113135315968_241892139587198968_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=q4u9mwOsBqUAX8metvv&_nc_ht=scontent.fapa1-1.fna&oh=00_AT8DF5dshCDYK4PGjG4mwVklu2SFmPvI3OYO3O6Gq5W1Tw&oe=61D2082E",
          name: "Luke Lambson",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/c0.12.80.80a/p80x80/96233057_10220436211069811_6397983670115762176_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=AI4vx-QQchsAX9GfLZ4&_nc_ht=scontent.fapa1-1.fna&oh=00_AT8-Iib30iXHTxx-p45CXTeAE6ISCE7_DA7mN5qMqSQ7-Q&oe=61F1C18E",
          name: "Ali Seable Durham",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/244647641_581731909915133_3521331435980194686_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=awzNHRV8DZoAX8TUYCZ&tn=blbHk5TA-fbyyr3W&_nc_ht=scontent.fapa1-1.fna&oh=00_AT8fKEmHqDXiocgc7QD4Klz9OESVl1KwtiCXfDE_94Zqew&oe=61D1EAB7",
          name: "Eden Durham",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/260552553_6452671734774187_324031417463739805_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=aL95c83hKJ4AX9RjJiu&_nc_ht=scontent.fapa1-1.fna&oh=00_AT-Pi8lgk8pEIMOb3T90XOFtXh6nf2gpOgl-wpVWvXCp-g&oe=61D390B7",
          name: "Sabrina Spackman",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/84002327_10220823315243663_4922509554643632128_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=lgWhBLc5OMEAX9jrziz&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-KxXssxnSj6CEHJh3oLMovZqYYuXp9YoK4SW4IW5XFwQ&oe=61F25135",
          name: "Spring Cullen",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-1/cp0/c10.0.80.80a/p80x80/231020501_1486721615024349_7252447969340177602_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=NuFOdrusG7AAX-hPEEy&tn=blbHk5TA-fbyyr3W&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_1LnLXR5zQI0oEFw9ds8azpVGARGU2GnZ3XfLbS7J7vA&oe=61D2ECD8",
          name: "Anthony Damiano",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/214465920_533385214481550_7735263568626086050_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=R4UPqaYq3RsAX8TxRLn&tn=blbHk5TA-fbyyr3W&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9JJKHtRrn2IUWiDGJgy5v34wEViqXQs_14-iQCsjBZWQ&oe=61D3D7B5",
          name: "Zack Huff",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/c12.0.80.80a/p80x80/139821547_3844089248944891_464017567151976365_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=GNtssP4HHPsAX-AfOiq&_nc_ht=scontent.fapa1-1.fna&oh=00_AT_qAbAe-2S-s35QrT4ix6g5lqpJaP_XHLh3891CYNde3w&oe=61F37C23",
          name: "Tom Durham",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-1/cp0/c9.0.80.80a/p80x80/87879882_10217993869861834_319704214324379648_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=Ch6pxGsqPpMAX_UMZZm&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-Iy_P-nu9Z87USYpQ64oo5pSi1aGcbaSqZkXJX-RHtTA&oe=61F38B29",
          name: "Emma Florian Schaffer",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/238624753_2884191608464675_1841330727389722903_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=KkW5FUQrNTMAX90dzJR&tn=blbHk5TA-fbyyr3W&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9h2pFj5DuIswc63RaEJR_WuDiAGRJFjYl9NMWC3HvkRA&oe=61D33FB1",
          name: "Rebekah Lipman",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/185644485_495773201738035_1307374115872991923_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=TQA1Ic_VQeUAX8D0eOK&_nc_ht=scontent.fapa1-1.fna&oh=00_AT_pgB5QgShiyE5Yx3S1g8AeimDrMie1s2C1rs9LF0eNFg&oe=61F1ED4E",
          name: "Robert Goebel",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/c0.0.80.80a/p80x80/217461639_1174226893076475_1799647527332035485_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=CmZ0EqJODtgAX-6rcui&_nc_ht=scontent.fapa1-1.fna&oh=00_AT8CHty44cjw28K-05ajihn97Hl892jDi-IOBNjYrlQh3w&oe=61D35C81",
          name: "Roy Sanchez",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/194968396_10225571913302917_5375767471269952461_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=05k3ER7olA8AX-sFP82&_nc_ht=scontent.fapa1-1.fna&oh=00_AT_aHCOvKDR4U3ob9g1acn9WEHCEtkZiVHwvk6hsbYcxmQ&oe=61F3369A",
          name: "Chris Kline",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/c0.0.80.80a/p80x80/224140484_1173152269870290_8824503448481685096_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=6v76pgCQTTMAX_UNed9&_nc_ht=scontent.fapa1-1.fna&oh=00_AT__CyZMxtG1h4vWbHbBhykasuR7m_TW8KNJ7LquDuuQtQ&oe=61D2600D",
          name: "Preston Jarvis",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/95364613_934159910358612_8507439793641095168_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=XKXYnsrkcXUAX9md-Ew&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9N6_NRceuxb6KpJIeEflFUeun6nggkOxsd6vMczk4GJg&oe=61F2B27A",
          name: "Colby Weber",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/240652910_3122285221387761_1535973974721423181_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=91pJRDVuhS8AX-jJtRx&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9CwOWSy8LBDj_nSLCknbCJM_SBDxMneEGbeMZDRE0wCA&oe=61D38601",
          name: "Lupita M Ramirez",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/c5.0.80.80a/p80x80/229352934_2951279338487600_5466754805400942611_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=UKv1dMIWNosAX8RtlLV&tn=blbHk5TA-fbyyr3W&_nc_ht=scontent.fapa1-1.fna&oh=00_AT_QSSw8s0S884HlWNWaClfSuAm9W99my5qMxIp7sAo1JQ&oe=61D282A0",
          name: "Noel Cruz",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/96801176_723405051737829_6831940143432073216_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=OWclltPC1e8AX9k7GkH&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9EV-J87f2gVOoB5DToER67-W9F2rsRuqOR59PcK_TfWQ&oe=61F356AD",
          name: "Alex Jarvis",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/75442915_2813933821952449_8550158886986842112_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=ubA1aJTeAg0AX9setlh&_nc_ht=scontent.fapa1-1.fna&oh=00_AT8opHwaXnoD695JSM9T5XFJjGo_cRdwRdZj12JVnBupxw&oe=61F1AE70",
          name: "William Ruiz",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/186504663_481989279891912_7015602575223395502_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=kAF0c88B70IAX8pRDVN&_nc_ht=scontent.fapa1-2.fna&oh=00_AT9FPx_3NInh65W8FQ2CCNQtUw3Rii56ETJQP2Niraha0g&oe=61F3FD44",
          name: "Tom Durham",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/242196536_1718322965023791_1711362426139271232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=BRIgn9tFissAX_YjV_2&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9rY5JZI8SYzo-AjdX0MMmq9bfevuDMiffPyPp-QK2uaw&oe=61D248D5",
          name: "Robby del Plain",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/200060350_278093240775757_3922538883966124954_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=sGrh08cyyDYAX_nmZJo&tn=blbHk5TA-fbyyr3W&_nc_ht=scontent.fapa1-2.fna&oh=00_AT9lvwHZc3rZtN_4r-hBFEoLZbD3ZVcOzGDEPQxkiLeaUQ&oe=61F25A30",
          name: "Mark Savage",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/269284254_4983904968310420_2748302325921433990_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=uuc2MpWJ5PAAX-yLLSA&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9xcWC1s0iYgnqJ4jEzl_nUvjsgZoDROJHbG7dF_APq1A&oe=61D1FCE8",
          name: "Preston Corlew",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/165797702_305242467695231_6595843684839523701_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=wS-sOHTlg4YAX_7fKEt&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_Our4Byn0CozkdoIb1oPKvQSghVwtNFInpR4RurD0iFg&oe=61F51DCA",
          name: "Kyle Melby",
        },
        {
          imageSource:
            "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/270919972_453544443029964_1158802221947280264_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=AtAp3UsQSAYAX_hUE-e&tn=blbHk5TA-fbyyr3W&_nc_ht=scontent.fapa1-1.fna&oh=00_AT_91lgdGFuwfMBmAfAFxN2g4lQ4dS-ShueJKKA0cRLEIQ&oe=61D32AE4",
          name: "Mario Mercado",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/269093693_650124246349946_718029472982584877_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=ywHi-gwAVr0AX9B3cDu&tn=blbHk5TA-fbyyr3W&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-Jxl1lkBbDLlKFlHndAuFkuZi7NKSgr3uzIFfXPTKt5w&oe=61D2591D",
          name: "Brennen Dye",
        },
        {
          imageSource:
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/203375538_1389293451456678_7659702343471220061_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=2fc63d&_nc_ohc=EmgeRxqF8bAAX9jOut1&_nc_ht=scontent.fapa1-2.fna&oh=00_AT--xRWfWLpsfq7CGONJ3zZkg3LeaAF_NdKHgxDd9SwZtA&oe=61F23498",
          name: "Moses Guzman",
        },
      ];
    },
  },
};
