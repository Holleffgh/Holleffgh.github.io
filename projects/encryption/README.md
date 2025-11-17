# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:9
My Partner's Key:1

Our initial shared key:

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|rs, ryg kbo iye  |hi, how are you  |10   |
|tx rzzo, szh lcp jzf |im good, how are you   |11   |
|      Jsfm uccr, W rwr tfwgpss Gibrom. Kvoh rwr mci rc?           |   Very
 good, I did frisbee Sunday. What did you do?              |14   |
|               qexqp kfzb. F jxfkiv grpq afa eljbtloh qefp tbbhbka, xka F afa
 pljb JJX. F jdeq yb obdfpqbofkd clo jv cfopq cfdeq pllk!  |  
 thats nice. I mainly just did homework this weekend, and I did some MMA. I
 might be registering for my first fight soon!|23   |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer.
By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity
for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in
 `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But
 we know that the real message is in binary.

Select the first six characters from this message and copy them here: QZQYoV

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information
 below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Pierre]
    Destination: [Waleed]  
    Sequence: 1/3
    Data: [1010001] [1011010]
    =========
    Packet 2:

    Source: [Pierre]
    Destination: [Waleed]
    Sequence: 2/3 
    Data: [1010001] [1011001]
    =========
    Packet 3:

    Source: [Pierre]
    Destination: [Waleed]
    Sequence: 3/3
    Data: [1101111] [1010110]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What
 purpose did each serve in this simulation? asymmetric is x=y, but asymmetric
 x=x 
- Why is it important that this protocol uses a new key for each message? to
 make sure that the secret key is never found
- Why is it important that you never share your secret key? once you share it
 it is not a secret
- In the transport layer, do these messages use TCP or UDP? Why? TCP because
 they want to make sure that all of the packets make it
- Now that you've created packets in the transport layer, give a short
 explanation of what happens to these packets in the internet layer and in the
 link layer. they get routed to the place it is trying to get to and the link
 is the pysical connection.
- This protocol successfully encrypts the **content** of the message. Even
 though and adversary in the middle can't read the content of the message,
 what other information can they still see? They can still see the header and
encrypted massage.

