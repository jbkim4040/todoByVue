<template>
    <div>
        <button @click="prevInfo">이전</button>

        <button @click="nextInfo">다음</button>
    </div>
</template>
<script>
export default {
    setup() {
        function prevInfo() {
            console.log("이전 할일 입니다.");
        }

        function nextInfo() {
            console.log("다음 할일 입니다.");
        }


        return {
            prevInfo,
            nextInfo
        }
    }
}
</script>
<style>

</style>