




















<script>

export default ({
    data () {
        return {
            courseInformationArray: [],
            currentCourseObject: {id: 0, courseName: '', description: '', lessons: 0, image: undefined },
            idCounter: 0
        }
    },

    methods: {
        add(event) {
            this.currentCourseObject.id++;
            let isNumber = new RegExp('^[0-9]+$');
            let courseName = '';
            let description = '';
            let lessons = '';
            let image = undefined;

            while (!courseName) {
                 courseName = prompt('Add Course Name (required field)?');
                 if (courseName !== '' && courseName !== null) {
                    this.currentCourseObject.courseName = courseName;
                 } else if (courseName === null) {
                    return;
                 }
            }

                description = prompt('Description?');
                this.currentCourseObject.description = description;

            while (!lessons || !isNumber.test(lessons)) {
                 lessons = prompt('Add Lessons(count) (required field and must be a number)?');
                 if (lessons !== '' && lessons !== null && isNumber.test(lessons)) {
                    this.currentCourseObject.lessons = lessons;
                 } else if (lessons === null) {
                    return;
                 }
            }
            
            image = prompt('Add image url. Make sure it is valid!');
            this.currentCourseObject.image = image;

            // Going around the objects reference type
            let object = {};
            for (let key in this.currentCourseObject) {
                object[key] = this.currentCourseObject[key];
            }

            this.courseInformationArray.push(object);

        }

       


    }
    
})

</script>

 <template>
    
     <body>
        
        <header>
            <h2>Welcome</h2>
            <img src="../assets/User-Icon-PNG.png" alt="">
            
        </header>

        <main>

            <button v-on:click="add">ADD</button>
            <button v-on:click="greet">UPDATE</button>
            <button v-on:click="greet">DELETE</button>


            <table>
                
                <tr>
                   <th class="thBorder">ID</th>
                   <th class="thBorder">Course Name</th>
                   <th class="thBorder">Description</th>
                   <th class="thBorder">Lessons(count)</th>
                   <th class="thBorder">State</th>
                   <th class="thBorder">Date added</th>
                   <th id="thImage">Image</th>
                </tr>

                <tr v-for="object in courseInformationArray">
                    <td class="tdBorder">{{object.id}}</td>
                    <td class="tdBorder">{{object.courseName}}</td>
                    <td class="tdBorder">{{object.description}}</td>
                    <td class="tdBorder">ff</td>
                    <td class="tdBorder">
                        <select name="" id="">
                        <option value="">Active</option>
                        <option value="">Archive</option>
                        </select>
                    </td>
                    <td class="tdBorder">ffaaa</td>
                    <td><img src="{{object.image}}" alt=""></td>
                </tr>
                
            </table>
               
        </main>

        <footer>
            <router-link class="links" to="/">Home</router-link>
            <router-link class="links" to="/learning">Learning</router-link>
        </footer>

    </body>

</template>

<style scoped>
@import '../assets/base.css';

    body {
        display: grid;
        grid-template-areas: 
            "header"
            "main"
            "footer";
            margin: 0;
    }

    table, tr {
        border: solid black 2px;
    }

    .thBorder {
        border-right: solid black 2px;
        border-bottom: solid black 2px;
    }

    #thImage {
        border-bottom: solid black 2px;
    }

    .tdBorder {
        border-right: solid black 2px;
    }

    table {
        width: 100%;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: cadetblue;
        height: 70px;
        width: 100%;
    }

    header h2 {
        margin-left: 20px;
    }

    img {
        width: 3.5%;
        height: 70%;
        border: solid black 2px;
        border-radius: 5px;
        margin-right: 20px;
    }

footer {
  background-color: cadetblue;
  grid-area: footer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.links {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  font-weight: bold;
}

.links:hover {
 background-color: yellow;
 border-radius: 8px;
 
}

</style>