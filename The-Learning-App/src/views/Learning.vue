




















<script>

export default ({
    data () {
        return {
            courseInformation: [],
            currentCourseObject: {id: 1, courseName: '', description: '', lessons: 0, },
            idCounter: 1,
        }
    },

    methods: {
        add(event) {
            let isNumber = new RegExp('^[0-9]+$');
            let courseName = '';
            let description = '';
            let lessons = '';


            while (!courseName) {
                 courseName = prompt('Add Course Name (required field)?');
                 if (courseName !== '' && courseName !== null) {
                    this.courseInformation.push(courseName);
                 } else if (courseName === null) {
                    return;
                 }
            }

                description = prompt('Description?');

            while (!lessons || !isNumber.test(lessons)) {
                 lessons = prompt('Add Lessons(count) (required field and must be a number)?');
                 if (lessons !== '' && lessons !== null && isNumber.test(lessons)) {
                    this.courseInformation.push(lessons);
                 } else if (lessons === null) {
                    return;
                 }
            }
            

        },

        handler:function() {
            this.add();
            this.idCounter++;
            console.log(this.courseInformation, this.idCounter);
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

            <button v-on:click="handler()">ADD</button>
            <button v-on:click="greet">UPDATE</button>
            <button v-on:click="greet">DELETE</button>


            <table>
                
                <tr>
                   <th>ID</th>
                   <th>Course Name</th>
                   <th>Description</th>
                   <th>Lessons(count)</th>
                   <th>State</th>
                   <th>Date added</th>
                   <th>Image</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td>sdada</td>
                    <td>sad</td>
                    <td>ff</td>
                    <td>
                        <select name="" id="">
                        <option value="">Active</option>
                        <option value="">Inactive</option>
                        </select>
                    </td>
                    <td>ffaaa</td>
                    <td>ffaaa</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>sdada</td>
                    <td>sad</td>
                    <td>ff</td>
                    <td>ffds</td>
                    <td>ffaaa</td>
                    <td>ffaaa</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>sdada</td>
                    <td>sad</td>
                    <td>ff</td>
                    <td>ffds</td>
                    <td>ffaaa</td>
                    <td>ffaaa</td>
                </tr>

            </table>

            <li v-for="info in courseInformation">{{info}}</li>
               
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

    th {
        border-right: solid black 2px;
        border-bottom: solid black 2px;
    }

    td {
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