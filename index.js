const Discord = require('discord.js');

<script type="text/javascript" src="discord.11.1.0.min.js"></script>
<script type="text/javascript">
  const client = new Discord.Client();

  client.on('message', msg => {
    const guildTag = msg.channel.type === 'text' ? `[${msg.guild.name}]` : '[DM]';
    const channelTag = msg.channel.type === 'text' ? `[#${msg.channel.name}]` : '';
    console.log(`${guildTag}${channelTag} ${msg.author.tag}: ${msg.content}`);
  });

  client.login('NzY4MDc3MTkxNzgyNTk2NjA4.X47NoA.x0d4koGa3KOQf-KqwHIsDzV2Uk8');
</script>

/* const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬


client.once('ready', () => {
  console.log("디스코드 봇이 준비되었습니다");
  bot.user.setStatus('available');
});


// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
client.login(`NzY4MDc3MTkxNzgyNTk2NjA4.X47NoA.x0d4koGa3KOQf-KqwHIsDzV2Uk8`);


client.on('message', message => {
  if (message.content === "?주식" ) {
	message.channel.send("븅신");
  } 
  

  if(message.content === "!주식 선효투자증권") {
	const embed = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setTitle('선효투자증권 현재가')
    .setDescription(Math.floor(Math.random() * (30000 - 15000 + 1)) +"원")
    .addField('도박은 손목이 잘릴수도 있습니다.', '도박 중독은 장티푸스환자에게 신고하세요. 다 잘라버릴테니까.', true)
    message.channel.send(embed)
  }

  if(message.content === "!주식 선효대부") {

	
	const embed = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setTitle('선효대부 현재가')
    .setDescription(Math.floor(Math.random() * (1000 - 15000 + 1)) + "원")
    .addField('도박은 손목이 잘릴수도 있습니다.', '도박 중독은 장티푸스환자에게 신고하세요. 다 잘라버릴테니까.', true)
    message.channel.send(embed)
  }


});*/

