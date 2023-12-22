import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

const HomeScreen = () => {
  const [value, setValue] = useState("");

  const appendValue = (input) => {
    if(input == '00' && value == ''){
      setValue("")
      return
    }
    if(input == '0' && value == ''){
      setValue("")
      return
    }
    if(input == '.' && value == ''){
      setValue("")
      return
    }
    setValue(value + input);
  };

  const clearValue = () => {
    setValue("");
  };

  const deleteHandeler = () => {
    setValue(value.slice(0, -1));
  };

  const calculateResult = () => {
    if (typeof value !== "string" || !value) {
      console.log(
        "Invalid input. Please provide a valid arithmetic expression as a string."
      );
      return;
    }

    let result;
    if (value.includes("+")) {
      let array = value.split("+");
      result = array.reduce(
        (acc, curr) => parseFloat(acc) + parseFloat(curr),
        0
      );
    } else if (value.includes("-")) {
      let array = value.split("-");
      result = parseFloat(array[0]);
      for (let i = 1; i < array.length; i++) {
        result -= parseFloat(array[i]);
      }
    } else if (value.includes("*")) {
      let array = value.split("*");
      result = parseFloat(array[0]);
      for (let i = 1; i < array.length; i++) {
        result *= parseFloat(array[i]);
      }
    } else if (value.includes("÷")) {
      let array = value.split("÷");
      result = parseFloat(array[0]);
      for (let i = 1; i < array.length; i++) {
        result /= parseFloat(array[i]);
      }
    } else {
      console.log(
        "Invalid expression. Only addition (+), subtraction (-), and multiplication (*) are supported."
      );
      return;
    }

    setValue(result.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Calculator</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.inputBox}>
          <TextInput
            editable={false}
            style={styles.input}
            value={value}
            placeholder="0"
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <Pressable style={styles.button} onPress={clearValue}>
              <Text style={styles.text}>C</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.text}>%</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={deleteHandeler}>
              <Text style={styles.text}>{"<="}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("÷")}>
              <Text style={styles.text}>÷</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable style={styles.button} onPress={() => appendValue("7")}>
              <Text style={styles.text}>7</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("8")}>
              <Text style={styles.text}>8</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("9")}>
              <Text style={styles.text}>9</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("+")}>
              <Text style={styles.text}>+</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable style={styles.button} onPress={() => appendValue("4")}>
              <Text style={styles.text}>4</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("5")}>
              <Text style={styles.text}>5</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("6")}>
              <Text style={styles.text}>6</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("-")}>
              <Text style={styles.text}>-</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable style={styles.button} onPress={() => appendValue("1")}>
              <Text style={styles.text}>1</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("2")}>
              <Text style={styles.text}>2</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("3")}>
              <Text style={styles.text}>3</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => appendValue("*")}>
              <Text style={styles.text}>x</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable style={styles.button}>
              <Text style={styles.text} onPress={() => appendValue("00")}>
                00
              </Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.text} onPress={() => appendValue("0")}>
                0
              </Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.text} onPress={() => appendValue(".")}>
                .
              </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={calculateResult}>
              <Text style={styles.text}>=</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const colors = {
  primaryBackground: "#6366f1",
  headingText: "#e0e7ff",
  text: "#ffffff",
  inputBackground: "#ffffff",
  inputText: "#78716c",
  buttonBackground: "#2a2727",
  buttonText: "#fafaf9",
  buttonContainerBackground: "#453f3d",
};

const styles = StyleSheet.create({
  headingContainer: {
    backgroundColor: colors.primaryBackground,
    height: 80,
    justifyContent: "center",
    paddingLeft: 15,
    borderRadius: 5,
  },
  heading: {
    color: colors.headingText,
    fontWeight: "400",
    fontSize: 30,
  },
  text: {
    color: colors.text,
    fontWeight: "600",
    fontSize: 20,
  },
  inputBox: {
    height: 200, // Specific height in pixels
    justifyContent: "flex-end",
    backgroundColor: colors.inputBackground,
    marginHorizontal: 5,
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 35,
    textAlign: "right",
    fontWeight: "600",
    color: colors.inputText,
  },
  row: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    top: 30,
    padding: 5,
    backgroundColor: colors.buttonContainerBackground,
  },
  button: {
    width: "22%",
    height: 68,
    borderRadius: 50,
    color: colors.buttonText,
    backgroundColor: colors.buttonBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    width: "45%",
    height: 75,
    borderRadius: 50,
    color: colors.buttonText,
    backgroundColor: colors.buttonBackground,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});

export default HomeScreen;
