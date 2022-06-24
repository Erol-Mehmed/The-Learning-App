




















<script>

export default ({
    data() {
        return {
            courseInformationArray: [],
            currentCourseObject: { id: 0, courseName: '', description: '', lessons: 0, image: undefined },
            date: new Date().toDateString()
        }
    },

    methods: {
        add() {
            this.currentCourseObject.id++;
            let isNumber = new RegExp('^[0-9]+$');
            let courseName = '';
            let description = '';
            let lessons = '';

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

            let image = prompt('Add image url. Make sure it is valid!');
           
            this.currentCourseObject.image = image;

            // Avoiding the objects reference
            let object = {};
            for (let key in this.currentCourseObject) {
                object[key] = this.currentCourseObject[key];
            }

            console.log(object.image);

            this.courseInformationArray.push(object);

        },

        update() {

            if (this.courseInformationArray.length === 0) {
                   return alert('There are no courses to update!');
                }

            let isNumber = new RegExp('^[0-9]+$');
            let courseName = '';
            let description = '';
            let lessons = '';
            let indexOfObject = 0;
            let id = '';
            let updatedObject = {};

            while (!isNumber.test(id) || id <= 0 || id > this.courseInformationArray.length) {
                id = prompt('Enter the ID of the course you want to update. It must be a valid ID number. (required field)');
                if (id === null) {
                    return;
                } else if (id <= 0 || id > this.courseInformationArray.length) {
                         alert('You must enter a valid ID number!');
                    }
            }


            while (!courseName) {
                courseName = prompt('Add Course Name (required field)?');
                if (courseName !== '' && courseName !== null) {
                    updatedObject.courseName = courseName;
                } else if (courseName === null) {
                    return;
                }
            }

            description = prompt('Description?');
            updatedObject.description = description;

            while (!lessons || !isNumber.test(lessons)) {
                lessons = prompt('Add Lessons(count) (required field and must be a number)?');
                if (lessons !== '' && lessons !== null && isNumber.test(lessons)) {
                    updatedObject.lessons = lessons;
                } else if (lessons === null) {
                    return;
                }
            }

            let image = prompt('Add image url. Make sure it is valid!');

            updatedObject.image = image;

            if (this.courseInformationArray.length > 1) {
                for (let i = 0; i < this.courseInformationArray.length; i++) {
                    if (Number(id) === this.courseInformationArray[i].id) {
                        indexOfObject = i;
                    }
                }
            }

            updatedObject.id = indexOfObject + 1;

            this.courseInformationArray.splice(indexOfObject, 1, updatedObject);

        },

        delete1() {

            let indexOfObject = 0;
            let isNumber = new RegExp('^[0-9]+$');

          if (this.courseInformationArray.length === 0) {
              return alert('There are no courses to update!');
           }

         while (!isNumber.test(id) || id <= 0 || id > this.courseInformationArray.length) {
         id = prompt('Enter the ID of the course you want to update. It must be a valid ID number. (required field)');
              if (id === null) {
                  return;
          } else if (id <= 0 || id > this.courseInformationArray.length) {
               alert('You must enter a valid ID number!');
            }
         }

         if (this.courseInformationArray.length > 1) {
                for (let i = 0; i < this.courseInformationArray.length; i++) {
                    if (Number(id) === this.courseInformationArray[i].id) {
                        indexOfObject = i;
                    }
                }
            }

            this.courseInformationArray.splice(indexOfObject, 1);

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

            <div id="buttonsDiv">
                <button v-on:click="add">ADD</button>
                <button v-on:click="update">UPDATE</button>
                <button v-on:click="delete1">DELETE</button>
            </div>

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

                <tr id="dynamicTr" v-for="object in courseInformationArray">
                    <td class="tdBorder">{{ object.id }}</td>
                    <td class="tdBorder">{{ object.courseName }}</td>
                    <td class="tdBorder">{{ object.description }}</td>
                    <td class="tdBorder">{{ object.lessons }}</td>
                    <td class="tdBorder">
                        <select name="" id="">
                            <option value="">Active</option>
                            <option value="">Archive</option>
                        </select>
                    </td>
                    <td class="tdBorder">{{date}}</td>
                    <td><img id="tableImage" :src="object.image" alt=""></td>
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
    min-height: 100vh;
}

#buttonsDiv {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
}

button {
    width: 100px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 1rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 600;
    background-color: peachpuff;
}

button:hover {
    background-color: darkturquoise;
    cursor: pointer;
}

table {
    background-color: aquamarine;
    font-size: 0.9rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#dynamicTr td {
   padding-top: 15px;
}


table,
tr {
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

td {
    text-align: center;
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

#tableImage {
    width: 50px;
    height: 50px;
}

footer {
    background-color: cadetblue;
    grid-area: footer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    position: absolute;
    bottom: 0;
    width: 100%;
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