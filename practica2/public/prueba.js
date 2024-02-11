import UsuarioModel from '../src/models/user.models.js'
import { v4 as uuidv4 } from 'uuid'


import mongoose from "mongoose"

const URI = 'mongodb+srv://andrest911:M3gPtTin1bfuAeSR@cluster0.nakuen6.mongodb.net/intCoopAgua?retryWrites=true'

const init =async () => {
    try {
        await mongoose.connect(URI)
        console.log('Database connected successfuly')
    } catch (error) {
        console.error('Ha ocurrido un error al intentar conectarse',error.message)
    }
}



await init()

// async function programa() {
// try{
//     const users = await UsuarioModel.find({})
    
//     const newarray = users.map((user) => {
//         return { ...user._doc, userId: uuidv4() };
//       });

//     console.log(newarray)

// }catch(error){
//     console.error(error)
// }

// }

// programa()


const nuevosUsuarios = [
    {
        
        first_name: 'Andres',
        last_name: 'Tello',
        street: 'florida',
        number: 1149,
        url_photo: 'https://lh3.googleusercontent.com/pw/ABLVV87qVfU5B4-URa8g_rZL8rRFMNuGndDOlloAg8v9ZOUbbLvXnVhNl7ai6ZO7aQgM7hqZk1YUCWw8U8lpcLHfL_4BcVDhuPlk1yLRlPIN_umFuCJhHKi70hHGMskS2GqIclNY-FdyN0gEQIws41kUV2Ky_UmZDntGWAJUqJqRnvNxqmxjtsXYyT5KcJtfbaPXvybGnPO_1nWW_-OG0Iprp-7q83xTgp4qbADpB5rxowUeLRLlidEeUGdCi2ZgUtjsiuXqfItFAzGQmLvQxTbHpAAuWUQWkDxRyzYhuHGGC3YQ3EiCYa-IEejZc3BkR_HwEj5CHy9FWtoY-22IsnkW8dT5-9hh7YETxPp1kEo2I4ODjHD34tvbKcwl4vBMIs0ypkoEqXuFI9OLlhQMHdJwbQ8_TZn08byC-SwpKQ1KfYqGt6pQV4dXvPnEyoaaszZ1t75iOnpOUk-uUJDNP2S9m-H6UubHBuD4Z-3-0hP6QTruWIJ3KFptUa0YWM2M5UiBaoPzPK9bHDA35MvheVkjPopcJKZBPaJlIyH1_Tf0wT8mB7NqZmtmcg_YTJos3GdU8hn9u5t3gIfldf1JqBwBz6kLRcRw9UD7jzpstM-6ClD8XM12E308-eOTdexLDeDNi9xD0iKDZuTMUJKQktZLzSfI1veX7RkyXVVrA_bKkLhB01_YZWAftd2u6LiiXHAsGcIrUBif8fq1hXUI7bcxKqMJYUDMbR7JGlCtJ230PDxKMgZdiiDFrLUqve2W76Lvmn92dgJVe_9PvBo3ga5kn4jq4q6SHElMZczxTGke6EwqpOO2saAbCZ5f8Wi7bWg36ZElzWQbIUNIJ_1JIROh5YweY4lRyZkHwV_L1JUB3Uh03PjujAD5Poe1bUOt_0kEBrg=w652-h554-s-no-gm?authuser=0',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718.30579338851!2d-64.4931418477749!3d-31.085892219655715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d831afc52fda9%3A0x83d43b2cdf0bbafe!2sFlorida%201149%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702762045989!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        userId: '6712d979-bdcb-43fb-8b89-37cfc35ad25a'
      },
      {
       
        first_name: '',
        last_name: '',
        street: '',
        number: null,
        url_photo: '',
        location: '',
        userId: 'b8c47c9d-a444-4c2f-b0fc-9e37f0fd99e7'
      },
      {
        
        first_name: 'Miriam del Valle',
        last_name: 'Artaza',
        street: 'Suipacha',
        number: null,
        url_photo: '',
        location: '',
        userId: 'a54e395f-d544-477b-ba75-6f6a34eac8c9'
      },
      {
        
        first_name: 'Ramón del Valle',
        last_name: 'Ledesma',
        street: 'Av. España y Las Sierras',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818567/casas_calles_sin_numeros/ledesma_teykmx.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d301.94272003966495!2d-64.48307115887036!3d-31.10717718706466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d82f69aa5323f%3A0xa74fd40ef46ff4c4!2sAv.%20Espa%C3%B1a%201387%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702771946699!5m2!1ses!2sar',
        userId: '8fdd7f0f-5f3c-426d-a7bf-f44740ff8793'
      },
      {
        
        first_name: 'Elias Fram',
        last_name: 'Sabagh',
        street: '9 de Julio y ',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818567/casas_calles_sin_numeros/sabagh_y1z1rt.jpg',
        location: '',
        userId: 'b2ec4fb8-6f09-4d4b-981c-49c3f23b3bcc'
      },
      {
        
        first_name: 'Gastón Raul',
        last_name: 'Olcese',
        street: 'Av. Patria y Jujuy',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818567/casas_calles_sin_numeros/olcese_oucobs.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d359.11935761748055!2d-64.4800473620978!3d-31.09476564492288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702771412749!5m2!1ses!2sar',
        userId: '53848666-6366-4a69-9388-73c51b3c9935'
      },
      {
       
        first_name: 'Gavilan Nelida',
        last_name: 'Bardiza',
        street: 'Humberto I y Conti',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818565/casas_calles_sin_numeros/bardiza_tmvkwo.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d427.05429861271136!2d-64.48677971472277!3d-31.097656581440145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702767874004!5m2!1ses!2sar',
        userId: 'aed36c1a-a017-47be-83da-8fd0fef11fe5'
      },
      {
        
        first_name: 'Elizabeth Gisela',
        last_name: 'Godino',
        street: 'San Geronimo y Bella Vista',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818566/casas_calles_sin_numeros/godino_gapth5.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.4787709152124!2d-64.48689372443641!3d-31.096422580856515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d82febb7be7d9%3A0xdc4aee419362e148!2sSan%20Jer%C3%B3nimo%20267%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702772102518!5m2!1ses!2sar',
        userId: '3fd3dfac-e95e-4d2c-9da9-94ad132ff598'
      },
      {
        
        first_name: 'Edgardo',
        last_name: 'Buenamico',
        street: 'Sarmiento',
        number: 218,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818566/casas_calles_sin_numeros/Buenamico_az5aa6.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.06979124603026!2d-64.48474528476322!3d-31.09421040512675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3bc2b2f802b%3A0x9f382014188dd560!2sMainero%20Alberto!5e0!3m2!1ses!2sar!4v1702772601561!5m2!1ses!2sar',
        userId: 'c8566649-3579-424a-a7e0-eb42188809fb'
      },
      {
        
        first_name: 'Jose Daniel',
        last_name: 'Dallera',
        street: 'Rio Tercero',
        number: null,
        url_photo: '',
        location: '',
        userId: 'a0272006-e06b-481e-b9bf-685e9a409ad9'
      },
      {
        
        first_name: 'Lidia Alicia',
        last_name: 'Alba',
        street: 'Colón y Humberto I',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818565/casas_calles_sin_numeros/alba_wlwacg.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.8526036922669!2d-64.48708585821704!3d-31.097819327116056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702773054378!5m2!1ses!2sar',
        userId: '708ea68e-ebe2-4d25-a293-f5ee8261f9de'
      },
      {
        
        first_name: 'Margarita Loza',
        last_name: 'Malledt',
        street: 'Pje 25 de Mayo',
        number: null,
        url_photo: '',
        location: '',
        userId: '6861ad75-d78e-40ec-ad70-dcb2d93c10e8'
      },
      {
        
        first_name: 'Leonilda',
        last_name: 'Maidana',
        street: 'Pje 25 de Mayo',
        number: null,
        url_photo: '',
        location: '',
        userId: '4422446e-5b22-4feb-b730-f84cebcff2bf'
      },
      {
        
        first_name: 'Juan Carlos ',
        last_name: 'Loza',
        street: 'Pje 25 de Mayo',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818567/casas_calles_sin_numeros/loza_padcrp.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.655336069961!2d-64.48841291778164!3d-31.091512914629636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d8301dec891bf%3A0xd066404f3bb238cb!2sByZnet!5e0!3m2!1ses!2sar!4v1702771815320!5m2!1ses!2sar',
        userId: 'cb4126f8-544f-42d9-954a-11ea6d988ba8'
      },
      {
       
        first_name: 'Hilda L.M',
        last_name: 'Camarata',
        street: 'Lopez y Planes',
        number: null,
        url_photo: '',
        location: '',
        userId: '55ac0386-c3c4-4154-999f-17389160a522'
      },
      {
        
        first_name: 'Palmiro',
        last_name: 'Garcia',
        street: 'Blas Parera',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818565/casas_calles_sin_numeros/garcia_palmiro_zsloba.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.950442050222!2d-64.49241112443691!3d-31.083305480228614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d8305431a227d%3A0x5fc5dd80da514b37!2sL%C3%B3pez%20y%20Planes%20741%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702772297882!5m2!1ses!2sar',
        userId: 'fc841b84-5527-450c-96d3-a28e5999143e'
      },
      {
        
        first_name: 'Matilde Lucrecia',
        last_name: 'Batalla',
        street: 'Laprida y Av. Belgrano',
        number: null,
        url_photo: '',
        location: '',
        userId: 'd91973dd-d768-4a65-af77-fa4d6798ca9c'
      },
      {
        
        first_name: 'Andrés',
        last_name: 'Basset',
        street: 'Pje Alfredo Luna',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818566/casas_calles_sin_numeros/basset_jcshj9.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359.14575612771927!2d-64.4898570386066!3d-31.087781588546687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d8304a72c4de7%3A0x975dc7e855fe999b!2sAv.%20Buenos%20Aires%20517%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702772680411!5m2!1ses!2sar',
        userId: '8ce203b2-120d-4dd3-be9e-565c314d8dd1'
      },
      {
        
        first_name: 'Maria Roldan',
        last_name: 'Sanchez',
        street: 'Cesáreo Bernaldo de Quirós',
        number: null,
        url_photo: '',
        location: '',
        userId: '53d1e3c3-cb23-44ff-ae6f-b717533ca268'
      },
      {
        
        first_name: 'Lucas Hernan',
        last_name: 'Moreno',
        street: 'Juan Jose Castro y Guemes',
        number: null,
        url_photo: '',
        location: '',
        userId: 'efd034fd-e040-4514-b9f3-606378e24914'
      },
      {
        
        first_name: 'Mariano Ricardo',
        last_name: 'Pacha',
        street: 'Viel y 12 de Octubre',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818568/casas_calles_sin_numeros/Pacha_Mariano_y4r8da.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d854.1707954276903!2d-64.49609386079153!3d-31.09073855998646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702769124340!5m2!1ses!2sar',
        userId: '9f50452d-966d-4119-9bce-6c6f0bcaf7c3'
      },
      {
        
        first_name: 'Asociacion',
        last_name: 'Alemana',
        street: 'Juan J paso y Los Cerrillos',
        number: null,
        url_photo: 'https://asset.cloudinary.com/diknzlqee/ffee24b0cb46fc34ecba879ae187ee68',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1708.3793571462386!2d-64.48097463853186!3d-31.088637999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d830078cb0907%3A0x2cb0f20e763bc81d!2sJuan%20Jos%C3%A9%20Paso%20300%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702772489346!5m2!1ses!2sar',
        userId: 'e9afe46c-7633-4c70-80ff-6f737aa92de6'
      },
      {
        
        first_name: 'Maria de Ferro',
        last_name: 'Agostinis',
        street: 'Centenario y Dr. Sabin',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818565/casas_calles_sin_numeros/agostinis_de_ferro_maria_z6vw50.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.1234357356245!2d-64.48083312069083!3d-31.096006287631308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d83b9f1ff8399%3A0xa3fb1b9888418f28!2sVicky%20house!5e0!3m2!1ses!2sar!4v1702773122227!5m2!1ses!2sar',
        userId: '420bd642-4b3a-478d-aebc-f6467729da8e'
      },
      {
        
        first_name: 'Elvira',
        last_name: 'Aramini',
        street: 'O´higgins y Cordoba ',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818565/casas_calles_sin_numeros/aramini_elvira_my7e9o.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d213.52950534603812!2d-64.47759360059437!3d-31.09660846440585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702772961400!5m2!1ses!2sar',
        userId: 'c8dd22d1-f778-4fed-8f3e-638b276497f1'
      },
      {
        
        first_name: 'Maximiliano Jose',
        last_name: 'Ludueña',
        street: 'Centenario ',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818567/casas_calles_sin_numeros/ludue%C3%B1a_maximiliano_fdwpsa.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.5172999630568!2d-64.47867912443645!3d-31.095351280805303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d82542b808d3d%3A0x7209a8495533e1f8!2sCentenario%20977%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702771649851!5m2!1ses!2sar',
        userId: 'f79f9348-88ee-416f-831c-c3c5491eb7c1'
      },
      {
        
        first_name: 'Pedro',
        last_name: 'Ramirez',
        street: 'Av.Marconi',
        number: null,
        url_photo: '',
        location: '',
        userId: 'e427f12c-fb44-4cfe-b2c3-9e8afa1abb27'
      },
      {
     
        first_name: 'Ricardo',
        last_name: 'Sansanelli',
        street: 'Gabriela Mistral',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818568/casas_calles_sin_numeros/sansanelli_ricardo_xn0fjy.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d213.54109790581316!2d-64.48728684000842!3d-31.09145088981745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702771081215!5m2!1ses!2sar',
        userId: '258f2f52-0acb-4e57-85c4-828f336a873e'
      },
      {
        
        first_name: 'Amin',
        last_name: 'Dahbar',
        street: '25 de Mayo y Kennedy',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631316/casas_calles_sin_numeros/Dahbar_amin_pfkopt.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d213.53966483572367!2d-64.48632856704786!3d-31.09208850993383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d8335676b4bab%3A0x15264935380cd720!2sluchetti%20%26%20asoc!5e0!3m2!1ses!2sar!4v1703685248283!5m2!1ses!2sar',
        userId: '8a4fd7ec-e52d-4e2d-88af-68687c569e14'
      },
      {
        
        first_name: 'Miriam',
        last_name: 'Artaza',
        street: 'Suipacha',
        number: null,
        url_photo: '',
        location: '',
        userId: '45aa5a67-0718-4d69-8e3f-4d1dc26b40fb'
      },
      {
       
        first_name: 'Federico',
        last_name: 'Videla',
        street: 'Comechingones',
        number: 1288,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631315/casas_calles_sin_numeros/Videla_Federico_Rodolfo_iegiay.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1436.5860079140803!2d-64.49722011649817!3d-31.087584243870598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d831bc36c8027%3A0xe28dba98cd9808cf!2sAv.%20Italia%20711%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702822131897!5m2!1ses!2sar',
        userId: 'c7c67083-661d-4365-9400-ccde2d3499fb'
      },
      {
       
        first_name: 'Norberto',
        last_name: 'Fadail',
        street: '12 de octubre',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703684237/casas_calles_sin_numeros/20231227_081351_z91gnq.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718.2586705943838!2d-64.49538499536592!3d-31.09212609079099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d831c4c1aeb85%3A0xf334a19834d27d2a!2sAv.%20Roma%201062%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702822381888!5m2!1ses!2sar',
        userId: 'c04dddd3-187a-45de-807c-2de19230a75c'
      },
      {
        
        first_name: 'Antonio Isacc',
        last_name: 'Rodriguez',
        street: 'Av.Marconi',
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631313/casas_calles_sin_numeros/Rodriguez_Antonio_Isaac_ckikhj.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.1736727182472!2d-64.49510215622303!3d-31.09041849860146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d831c416a2acd%3A0xafef5518b458b697!2sAv.%20Guillermo%20Marconi%20181%2C%20X5172%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702822580581!5m2!1ses!2sar',
        number: 264,
        userId: '271b1ed1-5fb0-4f12-8039-5b5387dc3e78'
      },
      {
        
        first_name: 'Jesus Justo',
        last_name: 'Rivero',
        street: 'Av.Marconi y Aconcagua',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631311/casas_calles_sin_numeros/Rivero_Jesus_btb49q.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d302.0074984529489!2d-64.49914365376074!3d-31.086799996940787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702822779089!5m2!1ses!2sar',
        userId: 'f7b4371c-9da5-4197-810c-102cf1ac8688'
      },
      {
        
        first_name: 'Federico Agustin',
        last_name: 'Guzman',
        street: 'Suipacha',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631311/casas_calles_sin_numeros/Guzman_Federico_bgmkxk.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.8853534488508!2d-64.49450472443695!3d-31.08511588031527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d831ada9282e9%3A0x55b4da7e066c95af!2sSuipacha%201030%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702822945709!5m2!1ses!2sar',
        userId: '222f42e5-eb72-4001-8359-c3433a9c82de'
      },
      {
       
        first_name: 'Analia',
        last_name: 'Gomez',
        street: 'Estados Unidos',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631310/casas_calles_sin_numeros/Gomez_Analia_pa6qua.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.862903849277!2d-64.49290852443691!3d-31.08574028034509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d8304da713fdd%3A0xa7ae64623959b3e!2sBlas%20Parera%20142%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702823069010!5m2!1ses!2sar',
        userId: '4a75d3bb-81cd-4c05-b95f-b6ac1cdf4fe7'
      },
      {
        
        first_name: 'Walter Hugo',
        last_name: 'Relevante',
        street: 'Fray Luis Beltran y San Vicente',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631305/casas_calles_sin_numeros/Relevante_Walter_zuewc3.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.106600764191!2d-64.48315434192479!3d-31.086021129180153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d82540a7563cd%3A0x63c72e7d55a0ee1e!2sLa%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702823460935!5m2!1ses!2sar',
        userId: 'b7f9119d-a929-40b6-bc32-14869a37ca93'
      },
      {
        
        first_name: 'Jesica',
        last_name: 'Bogado',
        street: 'Pjs San Vicente ',
        number: null,
        url_photo: '',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d427.1115477295862!2d-64.48321441963304!3d-31.084920394527508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702823608796!5m2!1ses!2sar',
        userId: '9e5716e7-9212-4c42-972e-0c2c40721eef'
      },
      {
        
        first_name: 'Juan Carlos ',
        last_name: 'Mojzyk',
        street: 'Centenario',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631305/casas_calles_sin_numeros/Mojzyk_Juan_Carlos_zqujgt.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.8639035104407!2d-64.47979001906138!3d-31.09618022778463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d82ff5146fecd%3A0x28986a2972f217f3!2sCentenario%20310%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702823796865!5m2!1ses!2sar',
        userId: '13042553-e14e-4151-b5f3-967be257f16f'
      },
      {
        
        first_name: 'Diego Juan',
        last_name: 'Gonzales',
        street: 'Pje Guemes',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631304/casas_calles_sin_numeros/Gonzales_Diego_Juan_lco7ye.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d302.0050171919408!2d-64.49114845315732!3d-31.087580742631754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702823930313!5m2!1ses!2sar',
        userId: 'a48d28b1-6159-49ff-98f5-ec73d6b9285b'
      },
      {
        
        first_name: 'Ricardo Alberto',
        last_name: 'Herrero',
        street: 'Francia y Santa Fe',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631305/casas_calles_sin_numeros/Herrero_Ricardo_Alberto_ppiesj.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.1078799733527!2d-64.47703223039994!3d-31.097736350029233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d831435bd2d19%3A0xeaea226893aec0e0!2sFer!5e0!3m2!1ses!2sar!4v1702824107906!5m2!1ses!2sar',
        userId: 'c7d1a667-d1fc-444b-9919-091c0bf2b9e6'
      },
      {
       
        first_name: 'Maria Angelica',
        last_name: 'Ortiz',
        street: 'Comechingones',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703631305/casas_calles_sin_numeros/Ortiz_Maria_Angelica_y6xcwj.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1436.5948462289425!2d-64.4950191436781!3d-31.08699960478366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d831b0c97e407%3A0x8c54b8ad09d40c6!2sLos%20Comechingones%201105%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702824229716!5m2!1ses!2sar',
        userId: 'f7e49abb-e0f1-40dc-8794-4ca6149cbb22'
      },
      {
        
        first_name: 'Ana Ines',
        last_name: 'Casullo',
        street: 'Humberto I',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702948582/Casullo_Ana_Ines_nppqp6.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.05390477836227!2d-64.48763865571658!3d-31.09774418134572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d82540a7563cd%3A0x63c72e7d55a0ee1e!2sLa%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702824392189!5m2!1ses!2sar',
        userId: 'cb53dfc6-f2bc-41b1-b823-1a5b6eaf4406'
      },
      {
        
        first_name: 'Gladys',
        last_name: 'Cuello',
        street: 'Florida',
        number: 1149,
        url_photo: '',
        location: '',
        userId: '1d036925-50b4-4892-91da-a956851c3b4b'
      },
      {
        
        first_name: 'Victor Hugo',
        last_name: 'Giaveno',
        street: 'Berutti y Av. Las Heras',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703632385/casas_calles_sin_numeros/Giaveno_Victor_Hugo_n8ofci.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.84850076175337!2d-64.48879776408006!3d-31.099061151633215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d82fb83c46cb1%3A0x9f8c920957c8f1ad!2zUsOtbyBQcmltZXJvLCBMYSBGYWxkYSwgQ8OzcmRvYmE!5e0!3m2!1ses!2sar!4v1703632424783!5m2!1ses!2sar',
        userId: '8e8c4b29-5340-4943-9fae-0e9cbe32c8e3'
      },
      {
        
        first_name: 'Raul Venancio',
        last_name: 'Cañete',
        street: 'Juan B. Justo',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703632385/casas_calles_sin_numeros/Ca%C3%B1ete_Raul_tkoh80.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1708.1835963585193!2d-64.47903870483754!3d-31.09952482496851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d82540a7563cd%3A0x63c72e7d55a0ee1e!2sLa%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1703632560383!5m2!1ses!2sar',
        userId: '1861b9f7-cefe-4b25-9452-beef66efb82e'
      },
      {
        
        first_name: 'Jose Oscar',
        last_name: 'Melis',
        street: 'Av. Italia',
        number: 288,
        url_photo: '',
        location: '',
        userId: 'b619466b-088b-474e-ac25-89bd5d197656'
      },
      {
       
        first_name: 'Uria Manuel',
        last_name: 'Gomez',
        street: 'Pueyrredon',
        number: 23,
        url_photo: '',
        location: '',
        userId: '6dfad938-2d3d-445c-b453-bb2e89b26afe'
      },
      {
        
        first_name: '',
        last_name: '',
        street: '',
        number: null,
        url_photo: '',
        location: '',
        userId: '1ff1a842-e930-4a41-ac9f-37d9794cd4bc'
      },
      {
        
        first_name: '',
        last_name: '',
        street: '',
        number: null,
        url_photo: '',
        location: '',
        userId: 'a9f29a78-a7e4-4dd9-9c15-ccc7640ba350'
      },
      {
        
        first_name: '',
        last_name: '',
        street: 'Av.Marconi y Cuenca',
        number: 555,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818567/casas_calles_sin_numeros/maldonado_mendieta_jtqwdf.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213.54278050730153!2d-64.49470956295927!3d-31.09070222993838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d831c5c81619b%3A0x8a356b03a51fbdfa!2sAv.%20Guillermo%20Marconi%20232%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702771568298!5m2!1ses!2sar',
        userId: 'd7882403-83c9-417d-8990-2807eb650fc7'
      },
      {
       
        first_name: 'Angel Ricardo',
        last_name: 'Zulian',
        street: 'Carlos Gardel',
        number: 350,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1703719815/casas_calles_sin_numeros/IMG-20231227-WA0000_fzmcle.jpg',
        location: '',
        userId: 'e9ec1c7c-aef8-47ff-8f85-f8aba4d6b9d4'
      },
      {
        
        first_name: 'Alicia de Mendieta',
        last_name: 'Maldonado',
        street: 'Av.Marconi y Cuenca',
        number: null,
        url_photo: 'https://res.cloudinary.com/diknzlqee/image/upload/v1702818567/casas_calles_sin_numeros/maldonado_mendieta_jtqwdf.jpg',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213.54278050730153!2d-64.49470956295927!3d-31.09070222993838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d831c5c81619b%3A0x8a356b03a51fbdfa!2sAv.%20Guillermo%20Marconi%20232%2C%20La%20Falda%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1702771568298!5m2!1ses!2sar',
        userId: '1c8a0127-8721-4574-a2cf-b9b056a58849'
      },
      {
        
        userId: '6ba0fa34-de74-4521-bec4-05fd160913e2',
        first_name: 'Froda',
        last_name: 'Michi',
        street: 'Florida',
        number: 1149,
        url_photo: '',
        location: '',
      }
  ];
  
  // Utilizar insertMany para insertar los nuevos usuarios
  UsuarioModel.insertMany(nuevosUsuarios, (error, resultado) => {
    if (error) {
      console.error('Error al insertar usuarios:', error);
    } else {
      console.log('Usuarios insertados correctamente:', resultado);
    }
  });

//cosigo para ejecutar en la terminal  node practica2/public/prueba.js