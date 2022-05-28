FROM node
LABEL maintainer ignacio.delacuba@utec.edu.pe
RUN git clone -q https://github.com/ignacio1511/Lab04-CognitiveComputing.git
WORKDIR Lab04-CognitiveComputing
RUN npm install> /dev/null
EXPOSE 9000
CMD ["npm","start"]