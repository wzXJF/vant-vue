<script>
export default {
  data () {
    return {
      msg: 'can use jsx',
      listData: [{ id: 1, name: '张三' }, { id: 2, name: '王五' }, { id: 3, name: '赵六' }]
    }
  },
  methods: {

  },
  render () {
    return (
      <div>
        <p class="title">{this.msg}</p>
        <ul class="content">
          {this.listData.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  color: burlywood;
}
.content {
  margin-top: 15px;
  li {
    float: left;
    margin-right: 10px;
    font-size: 14px;
    color: gray;
  }
}
</style>