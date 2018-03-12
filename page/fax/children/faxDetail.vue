 <template>
	<div class="homec">
11
    <div class="home_nr">
     <h2>{{this.ele1.name}}</h2>
     <br>
     <h4>{{this.ele1.source}}</h4>
     <P> <img v-for="item in this.ele1.url" :src="item.name"></P>
    </div>



    <p>{{this.ele1}}</p>
    </div>
</template>

<script>
// import {foodMenu ,zhufang1,zhufang2,zhufang3,zhufang4} from '../../ajax/ajax'
    export default {
    	data(){
            return{

            }
        },
        created(){

        },
        props:["g1","ele1"],
        methods: {

        }
    }
</script>

<style lang="less" scoped>
.homec .home_nr{ width: 100%; float: left;
   h2{ text-align: center; margin-top: 15px;}
   h4{ text-align: center; margin-top: 15px; margin-bottom: 15px;}
   p{ text-align: center}
}

</style>
